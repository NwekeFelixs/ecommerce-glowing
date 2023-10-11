import React, { useEffect } from 'react';
import '../css/style.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import collection1 from '../img/collection-1.jpg'
import collection2 from '../img/collection-2.jpg'
import collection3 from '../img/collection-3.jpg'

const collections = [
  {
    title: 'Summer Collection',
    price: 'Starting at $17.99',
    image: collection1,
  },
  {
    title: 'What’s New?',
    price: 'Get the glow',
    image: collection2,
  },
  {
    title: 'Buy 1 Get 1',
    price: 'Starting at $7.99',
    image: collection3,
  },
  // Add more collection objects as needed
];

const CollectionSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const scrollReveal = function () {
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
          sections[i].classList.add("active");
        }
      }
    };

    // Add an event listener to run scrollReveal when the user scrolls
    window.addEventListener('scroll', scrollReveal);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollReveal);
    };

    // The empty dependency array [] means this effect will run once after the initial render
  }, []);

  return (
    <section className="section collection" id="collection" aria-label="collection" data-section>
      <div className="container">
        <ul className="collection-list">
          {collections.map((collection, index) => (
            <li key={index}>
              <div className="collection-card has-before hover:shine">
                <h2 className="h2 card-title">{collection.title}</h2>
                <p className="card-text">{collection.price}</p>
                <a href="#" className="btn-link">
                  <span className="span">Shop Now</span>
                  <AiOutlineArrowRight className="arrow-icon" />
                </a>
                <div className="has-bg-image" style={{ backgroundImage: `url(${collection.image})` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CollectionSection;
