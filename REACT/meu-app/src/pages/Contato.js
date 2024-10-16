import React from 'react';
import zapImage from '../imagens/zap.jpeg';
import faceImage from '../imagens/face.jpeg';
import instaImage from '../imagens/insta.jpeg';

function Contato() {
  return (
    <section className="contact">
      <form>
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="social-media">
        <h3>Acesse também nossas redes sociais:</h3>
        <div className="icons">
          <img src={zapImage} alt="WhatsApp" />
          <img src={faceImage} alt="Facebook" />
          <img src={instaImage} alt="Instagram" />
        </div>
      </div>
    </section>
  );
}

export default Contato;
