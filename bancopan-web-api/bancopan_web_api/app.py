
from crypt import methods
import logging
from wsgiref import headers
from flask import Flask, json, jsonify, request
import bancopan_controller
from db import create_tables, get_db
from flask_oidc import OpenIDConnect
import requests

import settings
import sys

logging.basicConfig(
    stream=sys.stdout,
    level=settings.LOG_LEVEL,
    format='%(asctime)s %(levelname).4s %(name)s: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
log = logging.getLogger(__name__)


app = Flask(__name__)

# add config
app.config.update({
    'SECRET_KEY': 'rHJwsJGM37teYdliqijAr9udXSXGxbus',
    'TESTING': True,
    'DEBUG': True,
    'OIDC_CLIENT_SECRETS': 'client_secrets.json',
    'OIDC_ID_TOKEN_COOKIE_SECURE': False,
    'OIDC_REQUIRE_VERIFIED_EMAIL': False,
    'OIDC_USER_INFO_ENABLED': True,
    'OIDC_OPENID_REALM': 'demo',
    'OIDC_SCOPES': ['openid', 'email', 'profile'],
    'OIDC_INTROSPECTION_AUTH_METHOD': 'client_secret_post',
    'OIDC_TOKEN_TYPE_HINT':'access_token'
})


# keycloak
oidc = OpenIDConnect(app)

#Rotas
@app.route('/')
def hello_world():
    if oidc.user_loggedin:
        return ('Oi, %s, <a href="/private">See private</a> ' '<a href="/logout">Log out</a>' % oidc.user_getfield('preferred_username'))
    else:
        return 'Bem vido anonimo, <a href="/private">log in</a> '


@app.route('/hello', methods=["GET"])
@oidc.accept_token(require_token=True, scopes_required=['openid'])
def get_home():
    texto = 'Hello World!'
    return jsonify(texto)

# rota private
@app.route('/private')
@oidc.require_login
def hello_me():
    info = oidc.user_getinfo(['preferred_username', 'email', 'sub'])

    username = info.get('preferred_username')
    email = info.get('email')
    user_id = info.get('sub')

    if user_id in oidc.credentials_store:
        try:
            from oauth2client.client import OAuth2Credentials
            access_token = OAuth2Credentials.from_json(oidc.credentials_store[user_id]).access_token
            print('access_token=<%s>' % (access_token))
            headers = {'Authorization': 'Bearer %s' % (access_token)}
            # YOLO
            greeting = requests.get('http://localhost:5000/api/1', headers=headers).text
            #print("Testando")
            #print(greeting)

        except:
            print("Could not access greeting-service")
            greeting = "Olá %s" % username

    return ("""%s seu email é %s e seu user_id é %s!
    <ul>
        <li><a href="/">Home</li>
        <li><a href="http://localhost:8080/auth/realms/demo/account?referrer=app&referrer_uri=http://localhost:5000/private&">Account</li>        
    </ul>
    """ % (greeting, email, user_id))


@app.route("/api/<id>", methods=["GET"])
@oidc.accept_token(require_token=True, scopes_required=['openid'])
def get_movimentos_id_conta(id):
    resultado = bancopan_controller.get_by_conta(id)
    return jsonify(resultado)

#Criando uma conta
@app.route("/api", methods=["POST"])
def insert_conta():
    banco_details = request.get_json()
    cpf = banco_details["cpf"]
    nome = banco_details["nome"]
    resultado = bancopan_controller.insert_conta(cpf, nome)
    return jsonify(resultado)

#Criando uma movimentacao
@app.route("/api/movimento", methods=["POST"])
def insert_movimentacao():
    banco_details = request.get_json()
    id_conta = banco_details["id_conta"]
    descricao = banco_details["descricao"]
    valor = banco_details["valor"]
    data = banco_details["data"]
    cd_tipo = banco_details["cd_tipo"]
    resultado = bancopan_controller.insert_movimentacoes(id_conta, descricao, valor, data, cd_tipo)
    return jsonify(resultado)

#health
@app.route("/health")
def health():
    conn = None
    try:
        conn = get_db()
        conn.execute('select 1')
        return jsonify("Ok")
    except Exception as e:
        log.error(str(e))
        return "Unable to connect to database.", 500
    finally:
        if conn:
            conn.close()

# logout
@app.route('/logout')
def logout():
    """ Removing the session cookie local."""
    oidc.logout()
    return 'Oi, voce foi deslogado! <a href="/">Retornar</a>'



def configure_app(flask_app):
    flask_app.config['PREFERRED_URL_SCHEME'] = settings.PREFERRED_URL_SCHEME

def main():
    create_tables()
    app.run()

if __name__ == "__main__":
    main()