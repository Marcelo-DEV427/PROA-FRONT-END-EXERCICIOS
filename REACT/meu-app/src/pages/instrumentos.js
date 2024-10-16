import React from 'react';
import violaoImage from '../imagens/violao.jpeg';

function Instrumentos() {
  return (
    <section className="products">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="product">
          <img src={violaoImage} alt="Violão" />
          <p>Violão Yamaha C70 III Clássico Nylon</p>
          <p className="price">R$ 999,50</p>
        </div>
      ))}
    </section>
  );
}

export default Instrumentos;
