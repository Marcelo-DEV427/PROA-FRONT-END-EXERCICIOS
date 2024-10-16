import React from 'react';
import './App.css';
import headerImage from './imagens/header.jpeg'
import introImage from './imagens/Ltexto.jpeg'
import violaoImage from './imagens/violao.jpeg'
import zapImage from './imagens/zap.jpeg'
import faceImage from './imagens/face.jpeg'
import instaImage from './imagens/insta.jpeg'
function App() {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <img src={headerImage} alt="Header" className="banner" /> {/* <--- Usando a imagem importada */}
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Quem Somos</a>
          <a href="#">Instrumentos</a>
          <a href="#">Endereço</a>
          <a href="#">Contato</a>
        </nav>
      </header>
      {/* Seção de Introdução */}
      <section className="intro">
        <div className="intro-text">
          <h2>Nossa Loja - Instrumentos Musicais</h2>
          <p>
          Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.

O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cicero também foram reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.
          </p>
        </div>
        <img src ={introImage} alt="Ltexto"
        
        />
      </section>

      {/* Produtos em Destaque */}
      <section className="products">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="product">
            <img src={violaoImage} alt='violão' className='products'
            
            />
            <p>Violão Yamaha C70 III Clássico Nylon</p>
            <p className="price">R$ 999,50</p>
          </div>
        ))}
      </section>

      {/* Mapa e Informações */}
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5013742053377!2d-46.656573384473726!3d-23.58801346749209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3a5b53a935%3A0x2f826bca21a25d6c!2sRua%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005060-050!5e0!3m2!1spt-BR!2sbr!4v1697409098362!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="location-info">
          <h2>Nossa Loja - Instrumentos Musicais</h2>
          <p>
            Estamos localizados na Rua Tito, 54 - Pompeia. Próximo ao Teatro
            Cacilda Becker, em um local aconchegante e com amplo estacionamento.
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
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
            <img src={zapImage} alt='WhatsApp' 
            
            />
            <img src={faceImage} alt='face'  />
            <img src={instaImage} alt='insta'  />
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>Nossa Loja - Instrumentos Musicais</p>
        <p>Rua Tito, 54 - São Paulo - SP</p>
      </footer>
    </div>
  );
}

export default App;
