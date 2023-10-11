import React, { useEffect } from 'react';
import './css/style.css';
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineClose
} from 'react-icons/ai';
import logo from '../components/img/logo.png';
import ScrollReveal from 'scrollreveal';

const Header = () => {
  useEffect(() => {
    const addEventOnElem = function (elem, type, callback) {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback);
        }
      } else {
        elem.addEventListener(type, callback);
      }
    };

    // Add your logic for scrollReveal here
    ScrollReveal().reveal('.animate', {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 200,
    });

    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = function () {
      if (navbar) {
        navbar.classList.toggle("active");
      }
      if (overlay) {
        overlay.classList.toggle("active");
      }
    };

    addEventOnElem(navTogglers, "click", toggleNavbar);

    const closeNavbar = function () {
      if (navbar) {
        navbar.classList.remove("active");
      }
      if (overlay) {
        overlay.classList.remove("active");
      }
    };

    addEventOnElem(navbarLinks, "click", closeNavbar);
  }, []);

  return (
    <div>
      <header className="header">
        <div className="alert">
          <div className="container">
            <p className="alert-text animate">Free Shipping On All U.S. Orders $50+</p>
          </div>
        </div>
        <div className="header-top" data-header>
          <div className="container">
            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
            <div className="input-wrapper">
              <input
                type="search"
                name="search"
                placeholder="Search product"
                className="search-field animate"
              />
              <button className="search-submit" aria-label="search">
                <AiOutlineSearch />
              </button>
            </div>
            <a href="#" className="logo animate">
              <img src={logo} width="179" height="26" alt="Glowing" />
            </a>
            <div className="header-actions">
              <button className="header-action-btn" aria-label="user">
                <AiOutlineUser />
              </button>
              <button className="header-action-btn" aria-label="favourite item">
                <AiOutlineStar />
                <span className="btn-badge animate">0</span>
              </button>
              <button className="header-action-btn" aria-label="cart item">
                <data className="btn-text" value="0">$0.00</data>
                <AiOutlineShoppingCart />
                <span className="btn-badge animate">0</span>
              </button>
            </div>
            <nav className="navbar">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link has-after animate">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#collection" className="navbar-link has-after animate">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#shop" className="navbar-link has-after animate">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#offer" className="navbar-link has-after animate">
                    Offer
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link has-after animate">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="sidebar">
        <div className="mobile-navbar" data-navbar>
          <div className="wrapper">
            <a href="#" className="logo animate">
              <img src={logo} width="179" height="26" alt="Glowing" />
            </a>
            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <AiOutlineClose />
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link animate" data-nav-link>
                Home
              </a>
            </li>
            <li>
              <a href="#collection" className="navbar-link animate" data-nav-link>
                Collection
              </a>
            </li>
            <li>
              <a href="#shop" className="navbar-link animate" data-nav-link>
                Shop
              </a>
            </li>
            <li>
              <a href="#offer" className="navbar-link animate" data-nav-link>
                Offer
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link animate" data-nav-link>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </div>
  );
};

export default Header;
