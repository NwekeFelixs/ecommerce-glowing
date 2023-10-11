import React, { useEffect } from 'react';
import '../css/style.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.jpg';
import blog3 from '../img/blog-3.jpg';


const BlogSection = () => {
  const scrollReveal = () => {
    const blogSection = document.getElementById('blog');

    if (blogSection && blogSection.getBoundingClientRect().top < window.innerHeight / 2) {
      blogSection.classList.add('active');
    }
  };

  useEffect(() => {
    scrollReveal();
    window.addEventListener('scroll', scrollReveal);
    return () => {
      window.removeEventListener('scroll', scrollReveal);
    };
  }, []);

  return (
    <section className="section blog" id="blog" aria-label="blog" data-section>
      <div className="container">
        <h2 className="h2-large section-title">More to Discover</h2>
        <ul className="flex-list">
          <li className="flex-item">
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-before hover:shine"
                style={{ '--width': 700, '--height': 450 }}
              >
                <img
                  src={blog1}
                  width="700"
                  height="450"
                  loading="lazy"
                  alt="Find a Store"
                  className="img-cover"
                />
              </figure>
              <h3>
                <a href="#" className="card-title">
                  Find a Store
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Our Store</span>
                <AiOutlineArrowRight className="arrow-icon" />
              </a>
            </div>
          </li>
          <li className="flex-item">
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-before hover:shine"
                style={{ '--width': 700, '--height': 450 }}
              >
                <img
                  src={blog2}
                  width="700"
                  height="450"
                  loading="lazy"
                  alt="From Our Blog"
                  className="img-cover"
                />
              </figure>
              <h3>
                <a href="#" className="card-title">
                  From Our Blog
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Our Store</span>
                <AiOutlineArrowRight className="arrow-icon" />
              </a>
            </div>
          </li>
          <li className="flex-item">
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-before hover:shine"
                style={{ '--width': 700, '--height': 450 }}
              >
                <img
                  src={blog3}
                  width="700"
                  height="450"
                  loading="lazy"
                  alt="Our Story"
                  className="img-cover"
                />
              </figure>
              <h3>
                <a href="#" className="card-title">
                  Our Story
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Our Store</span>
                <AiOutlineArrowRight className="arrow-icon" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};










export default BlogSection;
