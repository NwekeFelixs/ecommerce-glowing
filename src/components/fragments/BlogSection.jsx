import React from 'react';

const BlogSection = () => {
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
                  src={require('../img/blog-1.jpg').default}
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
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
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
                  src={require('../img/blog-2.jpg').default}
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
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
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
                  src={require('../img/blog-3.jpg').default}
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
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
