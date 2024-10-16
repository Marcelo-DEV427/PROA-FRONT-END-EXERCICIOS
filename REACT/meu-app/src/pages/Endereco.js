import React from 'react';

function Endereco() {
  return (
    <section className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="location-info">
        <h2>Endereço</h2>
        <p>Rua Tito, 54 - São Paulo, SP</p>
      </div>
    </section>
  );
}

export default Endereco;
