import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Silva Reis Imóveis" />
        </Link>

        {/* Menu Desktop */}
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Início</Link>
          <Link to="/imoveis" className="navbar-link">Imóveis</Link>
          <Link to="/sobre" className="navbar-link">Sobre</Link>
          <Link to="/contato" className="navbar-link">Contato</Link>
          <Link to="/anunciar" className="btn btn-primary">Anunciar Imóvel</Link>
        </div>

        {/* Botão Menu Mobile */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Mobile */}
        <div className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-mobile-content">
            <Link to="/" className="navbar-link" onClick={toggleMenu}>Início</Link>
            <Link to="/imoveis" className="navbar-link" onClick={toggleMenu}>Imóveis</Link>
            <Link to="/sobre" className="navbar-link" onClick={toggleMenu}>Sobre</Link>
            <Link to="/contato" className="navbar-link" onClick={toggleMenu}>Contato</Link>
            <Link to="/anunciar" className="btn btn-primary" onClick={toggleMenu}>
              Anunciar Imóvel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
