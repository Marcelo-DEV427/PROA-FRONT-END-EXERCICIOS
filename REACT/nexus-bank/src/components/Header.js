import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src="../imagens/logo-colored.png" alt="Logotipo NexusBank" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <div className="cta-buttons">
            <a href="#" className="btn btn-secondary">Entrar</a>
            <a href="#" className="btn btn-primary">Abrir Conta</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
