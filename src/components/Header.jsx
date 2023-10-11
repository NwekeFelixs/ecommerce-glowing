import React, { useEffect } from 'react';
import './css/style.css';
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineClose
} from 'react-icons/ai';

import logo from '../components/img/logo.png'

const HeaderComponent = () => {
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

    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    addEventOnElem(navTogglers, "click", toggleNavbar);

    const closeNavbar = function () {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    };

    addEventOnElem(navbarLinks, "click", closeNavbar);

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const headerActive = function () {
      if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    addEventOnElem(window, "scroll", headerActive);

    let lastScrolledPos = 0;

    const headerSticky = function () {
      if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
      } else {
        header.classList.add("header-hide");
      }

      lastScrolledPos = window.scrollY;
    };

    addEventOnElem(window, "scroll", headerSticky);
  }, []);

  return (
    <div>
        <header className="header">
        <div className="alert">
          <div className="container">
            <p className="alert-text">Free Shipping On All U.S. Orders $50+</p>
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
                className="search-field"
              />
              <button className="search-submit" aria-label="search">
                <AiOutlineSearch />
              </button>
            </div>
            <a href="#" className="logo">
              <img src="./assets/images/logo.png" width="179" height="26" alt="Glowing" />
            </a>
            <div className="header-actions">
              <button className="header-action-btn" aria-label="user">
                <AiOutlineUser />
              </button>
              <button className="header-action-btn" aria-label="favourite item">
                <AiOutlineStar />
                <span className="btn-badge">0</span>
              </button>
              <button className="header-action-btn" aria-label="cart item">
                <data className="btn-text" value="0">$0.00</data>
                <AiOutlineShoppingCart />
                <span className="btn-badge">0</span>
              </button>
            </div>
            <nav className="navbar">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link has-after">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#collection" className="navbar-link has-after">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#shop" className="navbar-link has-after">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#offer" className="navbar-link has-after">
                    Offer
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link has-after">
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
            <a href="#" className="logo">
              <img src={logo} width="179" height="26" alt="Glowing" />
            </a>
            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <AiOutlineClose/>
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>Home</a>
            </li>
            <li>
              <a href="#collection" className="navbar-link" data-nav-link>Collection</a>
            </li>
            <li>
              <a href="#shop" className="navbar-link" data-nav-link>Shop</a>
            </li>
            <li>
              <a href="#offer" className="navbar-link" data-nav-link>Offer</a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
            </li>
          </ul>
        </div>
        <div clas
        sName="overlay" data-nav-toggler data-overlay></div>
      </div>
    </div>
  );
};

export default HeaderComponent;
