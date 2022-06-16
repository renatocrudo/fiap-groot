import os
import logging


log = logging.getLogger(__name__)

PREFIX = 'BANCOPANWEB'

def format_key(key):
    return '{}_{}'.format(PREFIX, key)

def env(key):
    return os.environ.get(format_key(key))


#FLASK settings
FLASK_DEBUG = env('FLASK_DEBUG') or False
PREFERRED_URL_SCHEME = 'https'

LOG_LEVEL = env('LOG_LEVEL') or 'INFO'