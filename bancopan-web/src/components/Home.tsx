import React from 'react';


function Home() {

    return (
        <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

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
        <li><a href="#about">Produtos</a></li>
        <li><a href="#services">Institucional</a></li>
        <li><a href="#portfolio">Atendimento</a></li>
        <li><a href="#pricing"> </a></li>
        <li><a href="/login">Área do Cliente</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className="jumbotron text-center">
  <h1 className="texto-preto">Banco Pan</h1> 
  <p className= "texto-preto">Somos um banco que dá crédito e acesso à informação com tecnologia para você transformar desafios em conquistas.</p> 
  {/* <form>
    <div className="input-group">
      <input type="email" className="form-control" placeholder="Email Address" required/>
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form> */}
</div>

{/* <!-- Container (About Section) --> */}
<div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>Sobre o Banco Pan</h2><br/>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
    <div className="col-sm-4">
      {/* <span className="glyphicon glyphicon-signal logo"></span> */}
      <img src="./banco_pan.svg" alt="" />
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-globe logo slideanim"></span>
    </div>
    <div className="col-sm-8">
      <h2>Nossos Valores</h2><br/>
      <h4><strong>Missão:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
      <p><strong>Visão:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

{/* <!-- Container (Services Section) --> */}
<div id="services" className="container-fluid text-center">
  <h2>Acesso Rápido</h2>
  <h4></h4>
  <br/>
  <div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-barcode logo-small"></span>
      <h4>Boleto de Financiamento</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-credit-card logo-small"></span>
      <h4>Fatura de cartão de crédito</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small"></span>
      <h4>Seguros</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
  <br/><br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"></span>
      <h4>GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"></span>
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"></span>
      <h4>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>

{/* <!-- Container (Portfolio Section) --> */}


{/* <!-- Container (Pricing Section) --> */}


{/* <!-- Container (Contact Section) --> */}
<div id="contact" className="container-fluid bg-grey">
  <h2 className="text-center">Contato</h2>
  <div className="row">
    <div className="col-sm-5">
      <p>Entre em contato conosco.</p>
      <p><span className="glyphicon glyphicon-map-marker"></span> Avenida Paulista, nº 1.374, 16º andar, Bela Vista, São Paulo – SP</p>
      <p><span className="glyphicon glyphicon-phone"></span> +55 0800 888 0101</p>

    </div>
    <div className="col-sm-7 slideanim">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div className="col-sm-6 form-group">
          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment"></textarea><br/>
      <div className="row">
        <div className="col-sm-12 form-group">
          <button className="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>

<footer className="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span className="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Feito com 💙 por  <a href="renato" title="Renato Crudo">Renato Crudo</a></p>
</footer>


</body>
    )
}

export default Home;
