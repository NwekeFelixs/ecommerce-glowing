import React from 'react';
import '../components/css/style.css'; 
import { AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'; // Import icons from react-icons/ai
import companyLogo from '../components/img/logo.png'; 
import paymentMethodsImage from '../components/img/pay.png'; 

const Footer = () => {
  return (
    <footer className="footer" data-section>
      <div className="container">
        <div className="footer-top">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <p className="footer-list-text">
                Find a location nearest you. See <a href="#" className="link">Our Stores</a>
              </p>
            </li>
            <li>
              <p className="footer-list-text bold">+391 (0)35 2568 4593</p>
            </li>
            <li>
              <p className="footer-list-text">hello@domain.com</p>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Useful links</p>
            </li>
            <li>
              <a href="#" className="footer-link">New Products</a>
            </li>
            <li>
              <a href="#" className="footer-link">Best Sellers</a>
            </li>
            <li>
              <a href="#" className="footer-link">Bundle & Save</a>
            </li>
            <li>
              <a href="#" className="footer-link">Online Gift Card</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Information</p>
            </li>
            <li>
              <a href="#" className="footer-link">Start a Return</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact Us</a>
            </li>
            <li>
              <a href="#" className="footer-link">Shipping FAQ</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>
          </ul>
          <div className="footer-list">
            <p className="newsletter-title">Good emails.</p>
            <p className="newsletter-text">
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <form action="" className="newsletter-form">
              <input type="email" name="email_address" placeholder="Enter your email address" required className="email-field" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrapper">
            <p className="copyright">
              &copy; 2022 Feylicks
            </p>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="logo">
            <img src={companyLogo} width="179" height="26" loading="lazy" alt="Glowing" />
          </a>
          <img src={paymentMethodsImage} width="313" height="28" alt="available all payment method" className="w-100" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
