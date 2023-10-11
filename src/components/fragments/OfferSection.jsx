import React, { useEffect } from 'react';
import '../css/style.css';

const OfferSection = () => {
  // Scroll reveal function
  const scrollReveal = () => {
    const elements = document.querySelectorAll('.offer-banner, .offer-content');

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
    <section className="section offer" id="offer" aria-label="offer" data-section>
      <div className="container">
        <figure className="offer-banner">
          <img
            src={require('../img/offer-banner-1.jpg').default}
            width="305"
            height="408"
            loading="lazy"
            alt="offer products"
            className="w-100"
          />
          <img
            src={require('../img/offer-banner-2.jpg').default}
            width="450"
            height="625"
            loading="lazy"
            alt="offer products"
            className="w-100"
          />
        </figure>
        <div className="offer-content">
          <p className="offer-subtitle">
            <span className="span">Special Offer</span>
            <span className="badge" aria-label="20% off">
              -20%
            </span>
          </p>
          <h2 className="h2-large section-title">Mountain Pine Bath Oil</h2>
          <p className="section-text">
            Made using clean, non-toxic ingredients, our products are designed for everyone.
          </p>
          <div className="countdown">
            <span className="time" aria-label="days">
              15
            </span>
            <span className="time" aria-label="hours">
              21
            </span>
            <span className="time" aria-label="minutes">
              46
            </span>
            <span className="time" aria-label="seconds">
              08
            </span>
          </div>
          <a href="#" className="btn btn-primary">
            Get Only $39.00
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
