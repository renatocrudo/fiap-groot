import {useEffect, useState} from 'react';
import React from 'react';
import './Conta.css';
import axios from "axios";
import { useKeycloak } from "@react-keycloak/web";
import { userInfo } from 'os';

type Conta = {
    id: string;
    id_conta: string;
    descricao : string;
    valor: string;
    data: string;
    cd_tipo: string;
}

function Conta() {
    const { keycloak } = useKeycloak();
    const [contas, setContas] = useState<Conta[]>([])

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/1", {
          headers: {
            Authorization: `Bearer ${keycloak?.token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setContas(response.data);
        });
    }, [])


    return (
        <div>
            <h1>Olá Renato</h1>
            <div>
                <a href="#">Entradas</a> &nbsp;<a href="#">Shopping</a> &nbsp;<a href="#">Cartão</a> &nbsp;
            </div>
            <div> &nbsp; </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Data      </th>
                            <th></th>
                            <th>Movimento</th>
                            <th></th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {contas.map(conta => {
                        var isDespesa = conta.cd_tipo == '0';
                        return (                        
                            <tr key={conta.id} style={isDespesa ? {color:'red'}: {color:'blue'}}>
                                <td>{conta.data}</td>
                                <td></td>
                                <td>{conta.descricao}</td>
                                <td></td>
                                <td>{ isDespesa ? "-":""} R$ {conta.valor}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Conta;
