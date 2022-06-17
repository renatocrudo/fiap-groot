
from crypt import methods
import logging
from flask import Flask, json, jsonify, request
import bancopan_controller
from db import create_tables

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


#Rotas

@app.route('/', methods=["GET"])
def get_home():
    texto = 'Hello World!'
    return jsonify(texto)


@app.route("/api/<id>", methods=["GET"])
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


def configure_app(flask_app):
    flask_app.config['PREFERRED_URL_SCHEME'] = settings.PREFERRED_URL_SCHEME




def main():
    create_tables()
    app.run()

if __name__ == "__main__":
    main()