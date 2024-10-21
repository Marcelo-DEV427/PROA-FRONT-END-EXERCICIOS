import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Banco Reinventado para a Era Digital</h1>
          <p>Gerencie suas finanças de forma prática com a tecnologia de ponta e serviços personalizados do NexusBank.</p>
          <a href="#" className="btn btn-primary btn-large">Começar Agora</a>
        </div>
        <div className="hero-image">
          <img src="/api/placeholder/600/400" alt="Ilustração de Banco Digital" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
