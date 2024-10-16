import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import SobreNos from './pages/SobreNos';
import Instrumentos from './pages/instrumentos';
import Endereco from './pages/Endereco';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <img src={require('./imagens/header.jpeg')} alt="Header" className="banner" />
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/sobre-nos">Quem Somos</Link>
            <Link to="/instrumentos">Instrumentos</Link>
            <Link to="/endereco">Endereço</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <footer className="footer">
          <p>Nossa Loja - Instrumentos Musicais</p>
          <p>Rua Tito, 54 - São Paulo - SP</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
