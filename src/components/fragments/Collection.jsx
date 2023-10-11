import React from 'react';
import '../css/style.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const CollectionSection = () => {
  return (
    <section className="section collection" id="collection" aria-label="collection" data-section>
      <div className="container">
        <ul className="collection-list">
          <li>
            <div className="collection-card has-before hover:shine">
              <h2 className="h2 card-title">Summer Collection</h2>
              <p className="card-text">Starting at $17.99</p>
              <a href="#" className="btn-link">
                <span className="span">Shop Now</span>
                <AiOutlineArrowRight className="arrow-icon" /> 
              </a>
              <div className="has-bg-image" style={{ backgroundImage: "url('../img/collection-1.jpg')" }}></div>
            </div>
          </li>
          <li>
            <div className="collection-card has-before hover:shine">
              <h2 className="h2 card-title">What’s New?</h2>
              <p className="card-text">Get the glow</p>
              <a href="#" className="btn-link">
                <span className="span">Discover Now</span>
                <AiOutlineArrowRight className="arrow-icon" /> 
              </a>
              <div className="has-bg-image" style={{ backgroundImage: "url('../img/collection-2.jpg')" }}></div>
            </div>
          </li>
          <li>
            <div className="collection-card has-before hover:shine">
              <h2 className="h2 card-title">Buy 1 Get 1</h2>
              <p className="card-text">Starting at $7.99</p>
              <a href="#" className="btn-link">
                <span className="span">Discover Now</span>
                <AiOutlineArrowRight className="arrow-icon" /> 
              </a>
              <div className="has-bg-image" style={{ backgroundImage: "url('../img/collection-3.jpg')" }}></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CollectionSection;
