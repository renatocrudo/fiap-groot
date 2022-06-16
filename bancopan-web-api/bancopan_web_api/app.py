
import logging
from flask import Flask, json, jsonify, request

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

@app.route('/', methods=["GET"])
def get_home():
    texto = 'Hello World!'
    return jsonify(texto)


def configure_app(flask_app):
    flask_app.config['PREFERRED_URL_SCHEME'] = settings.PREFERRED_URL_SCHEME




def main():
    app.run()

if __name__ == "__main__":
    main()