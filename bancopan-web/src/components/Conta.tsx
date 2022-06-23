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
        <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
                    <div>

            <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#myPage"><img src="./banco_pan.svg" alt="" /></a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#about">Pagamentos</a></li>
        <li><a href="#services">Investimentos</a></li>
        <li><a href="#portfolio">Seguros</a></li>
        <li><a href="#pricing"> </a></li>
        <li><a href="/">Sair</a></li>
      </ul>
    </div>
  </div>
</nav>
            <div>
                <a href="#">Entradas</a> &nbsp;<a href="#">Shopping</a> &nbsp;<a href="#">Cartão</a> &nbsp;
            </div>
            <div> &nbsp; </div>
 <div id="about" className="container-fluid">
        <div className="row">
            <div className="col-sm-8">
            <h2>Olá Renato</h2><br/>
            <h4>Veja abaixo seu extrato da conta corrente.</h4><br/>
            </div>
            <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
            </div>
        </div>
        <div className='table-reponsive'>
                <table className='table table-hover'>
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
                            <tr key={conta.id}>
                                <td>{conta.data}</td>
                                <td></td>
                                <td>{conta.descricao}</td>
                                <td></td>
                                <td style={isDespesa ? {color:'red'}: {color:'blue'}}>{ isDespesa ? "-":""} R$ {conta.valor}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
</div>

        </div>

        </body>
    )
}

export default Conta;
