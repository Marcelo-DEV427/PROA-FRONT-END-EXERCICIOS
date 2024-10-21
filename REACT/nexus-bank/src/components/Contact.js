import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
