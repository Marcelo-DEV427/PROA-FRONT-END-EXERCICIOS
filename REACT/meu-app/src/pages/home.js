import React from 'react';
import introImage from '../imagens/Ltexto.jpeg';

function Home() {
  return (
    <section className="intro">
      <div className="intro-text">
        <h2>Nossa Loja - Instrumentos Musicais</h2>
        <p>
          Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico...
        </p>
      </div>
      <img src={introImage} alt="Texto" />
    </section>
  );
}

export default Home;
