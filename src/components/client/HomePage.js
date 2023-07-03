import React from 'react'
import { Link } from 'react-router-dom';
import Catagory from './Catagory';

const HomePage = () => {
  return (
    <>

      <div>

        <div className="site-blocks-cover" style={{ backgroundImage: 'url(images/hero_1.jpg)' }} data-aos="fade">
          <div className="container">
            <div className="row align-items-start align-items-md-center justify-content-end">
              <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                <h1 className="mb-2">Finding Your Perfect Shoes here</h1>
                <div className="intro-text text-center text-md-left">
                  <p className="mb-4">Unparalleled comfort and support, timeless style, durable craftsmanship—a perfect fusion of function and fashion for every occasion. </p>
                  <p>
                    <Link to="/products" className="btn btn-sm btn-primary">Shop Now</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-section-sm site-blocks-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-truck" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Shipping</h2>
                  <p>Discover your dream shoes with the added bonus of free shipping, bringing convenience and savings to your doorstep.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-refresh2" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Returns</h2>
                  <p>Enjoy the freedom of hassle-free returns, ensuring complete satisfaction with your perfect shoes, backed by our customer-friendly policy..</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-help" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Customer Support</h2>
                  <p>Our dedicated customer support team is here to assist you, providing exceptional service and resolving any queries or concerns promptly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Catagory />

        <div className="site-section block-8">
          <div className="container">
            <div className="row justify-content-center  mb-5">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Big Sale!</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-7 mb-5">
                <a href="#"><img src="images/blog_1.jpg" alt="Image placeholder" className="img-fluid rounded" /></a>
              </div>
              <div className="col-md-12 col-lg-5 text-center pl-md-5">
                <h2><a href="#">50% less in all items</a></h2>
                <p className="post-meta mb-4">By <a href="#">M Usama Razzaq</a> <span className="block-8-sep">•</span> MAy 31, 2023</p>
                <p>Don't miss out on our incredible big sale with a whopping 50% off, making it the perfect time to snag your dream shoes!</p>
                <p><Link to="/products" className="btn btn-primary btn-sm">Shop Now</Link></p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default HomePage;