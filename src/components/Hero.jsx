import { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [propertyType, setPropertyType] = useState('');
  const [purpose, setPurpose] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implementar a busca
    console.log({ propertyType, purpose, location });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Encontre o Imóvel dos Seus Sonhos</h1>
          <p>As melhores ofertas de imóveis em toda a região</p>
          
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-row">
              <select 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="form-select"
              >
                <option value="">Tipo</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="terreno">Terreno</option>
              </select>

              <select 
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="form-select"
              >
                <option value="">Finalidade</option>
                <option value="comprar">Comprar</option>
                <option value="alugar">Alugar</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Digite o bairro ou cidade"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-input"
            />

            <button type="submit" className="btn btn-primary">
              Buscar Imóveis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 