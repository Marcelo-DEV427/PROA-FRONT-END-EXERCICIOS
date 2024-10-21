import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2>Sobre o NexusBank</h2>
          <p>O NexusBank é uma fintech líder revolucionando o setor bancário desde 2015.</p>
          <a href="#" className="btn btn-primary">Nossa História</a>
        </div>
        <div className="about-image">
          <img src="/api/placeholder/500/300" alt="Equipe NexusBank" />
        </div>
      </div>
    </section>
  );
}

export default About;
