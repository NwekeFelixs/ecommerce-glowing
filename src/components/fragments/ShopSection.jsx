import React from 'react';
import '../css/style.css';
import { AiOutlineArrowRight, AiOutlineShoppingCart, AiOutlineStar, AiOutlineRepeat } from 'react-icons/ai';

const products = [
    {
      id: 1,
      title: 'Facial Cleanser',
      price: 29.00,
      discountedPrice: 39.00,
      imageUrl: require('../img/product-01.jpg').default,
      rating: 5,
      reviews: 5170,
    },
    {
      id: 2,
      title: 'Bio-shroom Rejuvenating Serum',
      price: 29.00,
      imageUrl: require('../img/product-02.jpg').default,
      rating: 5,
      reviews: 5170,
    },
    {
      id: 3,
      title: 'Coffee Bean Caffeine Eye Cream',
      price: 29.00,
      imageUrl: require('../img/product-03.jpg').default,
      rating: 5,
      reviews: 5170,
    },
    {
      id: 4,
      title: 'Facial Cleanser',
      price: 29.00,
      imageUrl: require('../img/product-04.jpg').default,
      rating: 5,
      reviews: 5170,
    },
    {
      id: 5,
      title: 'Coffee Bean Caffeine Eye Cream',
      price: 29.00,
      discountedPrice: 39.00,
      imageUrl: require('../img/product-05.jpg').default,
      rating: 5,
      reviews: 5170,
    },
    {
      id: 6,
      title: 'Facial Cleanser',
      price: 29.00,
      imageUrl: require('../img/product-06.jpg').default,
      rating: 5,
      reviews: 5170,
    },
  ];
  

const ShopSection = () => {
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
          {products.map(product => (
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
                    <button className="action-btn" aria-label="compare">
                      <AiOutlineRepeat />
                    </button>
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
