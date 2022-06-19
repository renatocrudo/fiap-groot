import {useEffect, useState} from 'react';
import React from 'react';
import './Conta.css';

type Conta = {
    id: string;
    id_conta: string;
    descricao : string;
    valor: string;
    data: string;
    cd_tipo: string;
}

function Conta() {
    const [contas, setContas] = useState<Conta[]>([])

    useEffect(() => {
        fetch('http://localhost:5000/api/1')
        .then(response => response.json())
        .then(data => {
            setContas(data);
        })
    }, [])
    return (
        <ul>
            {contas.map(conta => {
                return (
                    <li key={conta.id}>
                        <div>
                            <p><strong>{conta.descricao}</strong>| Data: <strong>{conta.data}</strong>| Valor:<strong className=".valorReceita">{conta.valor}</strong></p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Conta;
