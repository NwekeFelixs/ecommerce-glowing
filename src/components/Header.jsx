
import React, { useEffect } from 'react';
import { Input, Button, Layout, Menu } from 'antd';
import { AiOutlineSearch, AiOutlineUser, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import './css/style.css'; 

const { Header } = Layout;

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
    }

    addEventOnElem(navTogglers, "click", toggleNavbar);

    const closeNavbar = function () {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    }

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
    }

    addEventOnElem(window, "scroll", headerActive);

    let lastScrolledPos = 0;

    const headerSticky = function () {
      if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
      } else {
        header.classList.add("header-hide");
      }

      lastScrolledPos = window.scrollY;
    }

    addEventOnElem(window, "scroll", headerSticky);
  }, []);

  return (
    <Header className="header">
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
            <Input
              type="search"
              name="search"
              placeholder="Search product"
              className="search-field"
              prefix={<AiOutlineSearch />}
            />
            <Button
              className="search-submit"
              aria-label="search"
              icon={<AiOutlineSearch />}
            />
          </div>
          <a href="#" className="logo">
            <img src="./assets/images/logo.png" width="179" height="26" alt="Glowing" />
          </a>
          <div className="header-actions">
            <Button className="header-action-btn" aria-label="user" icon={<AiOutlineUser />} />
            <Button className="header-action-btn" aria-label="favourite item" icon={<AiOutlineStar />}>
              <span className="btn-badge">0</span>
            </Button>
            <Button className="header-action-btn" aria-label="cart item" icon={<AiOutlineShoppingCart />}>
              <data className="btn-text" value="0">$0.00</data>
              <span className="btn-badge">0</span>
            </Button>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <a href="#home" className="navbar-link has-after">Home</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#collection" className="navbar-link has-after">Collection</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#shop" className="navbar-link has-after">Shop</a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="#offer" className="navbar-link has-after">Offer</a>
            </Menu.Item>
            <Menu.Item key="5">
              <a href="#blog" className="navbar-link has-after">Blog</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default Header;
