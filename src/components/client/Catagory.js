import React from 'react'
import { Link } from 'react-router-dom';

const Catagory = () => {
  return (
    <>

      <div className="site-section site-blocks-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
              <Link className="block-2-item" to="womancatagory">
                <figure className="image">
                  <img src="images/women.jpg" alt className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Women</h3>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
              <Link className="block-2-item" to="kidscatagory">
                <figure className="image">
                  <img src="images/children.jpg" alt className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Kids</h3>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={200}>
              <Link className="block-2-item" to="mancatagory">
                <figure className="image">
                  <img src="images/men.jpg" alt className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Men</h3>
                </div>
              </Link>
            </div>


          </div>
        </div>
      </div>

    </>
  );
}

export default Catagory;