import React, { useEffect } from 'react';
import '../css/style.css';

const FeatureSection = () => {
  const featureItems = [
    {
      id: 1,
      title: 'Guaranteed PURE',
      text: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients',
      imageUrl: require('../img/feature-1.jpg').default,
    },
    {
      id: 2,
      title: 'Completely Cruelty-Free',
      text: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients',
      imageUrl: require('../img/feature-2.jpg').default,
    },
    {
      id: 3,
      title: 'Ingredient Sourcing',
      text: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients',
      imageUrl: require('../img/feature-3.jpg').default,
    },
  ];

  // Scroll reveal function
  const scrollReveal = () => {
    const elements = document.querySelectorAll('.flex-item');

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight / 2) {
        element.classList.add('active');
      }
    });
  };

  useEffect(() => {
    // Trigger the scroll reveal function when the component mounts
    scrollReveal();

    // Add a scroll event listener to call the scrollReveal function on scroll
    window.addEventListener('scroll', scrollReveal);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollReveal);
    };
  }, []);

  return (
    <section className="section feature" aria-label="feature" data-section>
      <div className="container">
        <h2 className="h2-large section-title">Why Shop with Glowing?</h2>
        <ul className="flex-list">
          {featureItems.map((feature) => (
            <li className="flex-item" key={feature.id}>
              <div className="feature-card">
                <img
                  src={feature.imageUrl}
                  width="204"
                  height="236"
                  loading="lazy"
                  alt={feature.title}
                  className="card-icon"
                />
                <h3 className="h3 card-title">{feature.title}</h3>
                <p className="card-text">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;
