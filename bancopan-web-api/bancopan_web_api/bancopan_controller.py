from multiprocessing import reduction
from db import get_db

def insert_conta(cpf, nome):
    db = get_db()
    cursor = db.cursor()
    statement = "INSERT INTO conta (cpf, nome) VALUES (?,?)"
    cursor.execute(statement, [cpf, nome])
    db.commit()
    return True


def insert_movimentacoes(id_conta, descricao, valor, data, cd_tipo):
    db = get_db()
    cursor = db.cursor()
    statement = "INSERT INTO movimentacoes (id_conta, descricao, valor, data, cd_tipo) VALUES (?,?,?,?,?)"
    cursor.execute(statement, [id_conta, descricao, valor, data, cd_tipo])
    db.commit()
    return True


def get_by_cpf(cpf):
    db = get_db()
    cursor = db.cursor()
    statement = "SELECT id_conta, cpf, nome FROM conta WHERE cpf = ?"
    cursor.execute(statement, [cpf])
    return cursor.fetchone()


def get_by_conta(id_conta):
    db = get_db()
    cursor = db.cursor()
    statement = "SELECT id, id_conta, descricao, valor, data, cd_tipo FROM movimentacao WHERE id_conta = ?"
    cursor.execute(statement, [id_conta])
    return cursor.fetchone()
