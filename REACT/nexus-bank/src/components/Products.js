import React from 'react';

function Products() {
  const products = [
    { image: '/api/placeholder/300/200', title: 'Conta Corrente Inteligente', description: 'Conta sem tarifas e com cashback.' },
    { image: '/api/placeholder/300/200', title: 'Poupança de Alto Rendimento', description: 'Taxas competitivas e economia automática.' },
    { image: '/api/placeholder/300/200', title: 'NexusInvest', description: 'Plataforma intuitiva para investimentos.' }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Nossos Produtos</h2>
        <div className="product-slider">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a href="#" className="btn btn-secondary">Saiba Mais</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
