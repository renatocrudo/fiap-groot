import sqlite3

DATABASE_NAME = "././bancopan.db"

def get_db():
    conn = sqlite3.connect(DATABASE_NAME)
    return conn

def create_tables():
    tables = [
        """CREATE TABLE IF NOT EXISTS conta (
    id_conta INTEGER PRIMARY KEY AUTOINCREMENT,
    cpf TEXT NOT NULL,
    nome TEXT NOT NULL)
    """,
    """CREATE TABLE IF NOT EXISTS movimentacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_conta INTEGER NOT NULL,
    descricao TEXT NOT NULL,
    valor TEXT NOT NULL,
    data TEXT NOT NULL,
    cd_tipo INTEGER NOT NULL)
    """
    ]
    db = get_db()
    cursor = db.cursor()
    for table in tables:
        cursor.execute(table)