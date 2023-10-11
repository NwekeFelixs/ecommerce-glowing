import React, { useEffect } from 'react';
import '../css/style.css';
import { AiOutlineArrowRight, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import product1 from '../img/product-01.jpg'
import product2 from '../img/product-02.jpg'
import product3 from '../img/product-03.jpg'
import product4 from '../img/product-04.jpg'
import product5 from '../img/product-05.jpg'
import product6 from '../img/product-06.jpg'

const products = [
  {
    id: 1,
    title: 'Facial Cleanser',
    price: 29.00,
    discountedPrice: 39.00,
    imageUrl: product1,
    rating: 5,
    reviews: 5170,
  },
  {
    id: 2,
    title: 'Bio-shroom Rejuvenating Serum',
    price: 29.00,
    imageUrl: product2,
    rating: 5,
    reviews: 5170,
  },
  {
    id: 3,
    title: 'Coffee Bean Caffeine Eye Cream',
    price: 29.00,
    imageUrl: product3,
    rating: 5,
    reviews: 5170,
  },
  {
    id: 4,
    title: 'Facial Cleanser',
    price: 29.00,
    imageUrl: product4,
    rating: 5,
    reviews: 5170,
  },
  {
    id: 5,
    title: 'Coffee Bean Caffeine Eye Cream',
    price: 29.00,
    discountedPrice: 39.00,
    imageUrl: product5,
    rating: 5,
    reviews: 5170,
  },
  {
    id: 6,
    title: 'Facial Cleanser',
    price: 29.00,
    imageUrl: product6,
    rating: 5,
    reviews: 5170,
  },
];

const ShopSection = () => {
  // Scroll reveal function
  const scrollReveal = () => {
    const elements = document.querySelectorAll('.scrollbar-item');

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
    <section className="section shop" id="shop" aria-label="shop" data-section>
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Our Bestsellers</h2>
          <a href="#" className="btn-link">
            <span className="span">Shop All Products</span>
            <AiOutlineArrowRight className="arrow-icon" />
          </a>
        </div>
        <ul className="has-scrollbar">
          {products.map((product) => (
            <li className="scrollbar-item" key={product.id}>
              <div className="shop-card">
                <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                  <img src={product.imageUrl} width="540" height="720" loading="lazy" alt={product.title} className="img-cover" />
                  {product.discountedPrice && (
                    <span className="badge" aria-label="20% off">-20%</span>
                  )}
                  <div className="card-actions">
                    <button className="action-btn" aria-label="add to cart">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="action-btn" aria-label="add to wishlist">
                      <AiOutlineStar />
                    </button>
                    <button className="action-btn" aria-label="compare"></button>
                  </div>
                </div>
                <div className="card-content">
                  <div className="price">
                    {product.discountedPrice && <del className="del">${product.discountedPrice}</del>}
                    <span className="span">${product.price}</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">{product.title}</a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper" aria-label={`${product.rating} star rating`}>
                      {[...Array(product.rating)].map((_, i) => (
                        <AiOutlineStar key={i} />
                      ))}
                    </div>
                    <p className="rating-text">{product.reviews} reviews</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShopSection;
