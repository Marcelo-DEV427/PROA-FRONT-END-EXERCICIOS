import React from 'react';

function Features() {
  const features = [
    { icon: 'fas fa-mobile-alt', title: 'Banco Mobile-First', description: 'Gerencie suas finanças a qualquer hora e lugar.' },
    { icon: 'fas fa-shield-alt', title: 'Segurança Avançada', description: 'Tecnologia de ponta para proteger seu dinheiro.' },
    { icon: 'fas fa-chart-line', title: 'Investimento Inteligente', description: 'Aumente seu patrimônio com IA.' },
    { icon: 'fas fa-comments-dollar', title: 'Suporte 24/7', description: 'Equipe disponível 24 horas por dia.' }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Por que escolher o NexusBank?</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
