
def list_for_json(chaves, valores):
    lista = []
    for item in valores:
        lista.append(dict(zip(chaves, item)))
    #resultado = dict(zip(chaves, valores))
    return lista