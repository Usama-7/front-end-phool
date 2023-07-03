import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const auth = localStorage.getItem("user")

  return (<>

    <footer className="site-footer border-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4 mt-5">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><Link to="/">Home</Link></li>

                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><Link to="/products">Products</Link></li>

                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><Link to="/contact">Contact</Link></li>

                </ul>
              </div>


              {auth && JSON.parse(auth).role === 1 &&
                <>
                  <div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                      <li><Link to="/adminAddProducts">AddProduct</Link></li>

                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                      <li><Link to="/adminProductsList">Product List</Link></li>

                    </ul>
                  </div><div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                      <li><Link to="/userlist">Users List</Link></li>

                    </ul>
                  </div><div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                      <li><Link to="/messages">Messages</Link></li>

                    </ul>
                  </div><div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                      <li><Link to="/purchaserequest">PurchaseRequest</Link></li>

                    </ul>
                  </div>



                </>
              }


            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 className="footer-heading mb-4">Promo</h3>
            <a href="#" className="block-6">
              <img src="images/hero_1.jpg" alt="Image placeholder" className="img-fluid rounded mb-4" />
              <h3 className="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
              <p>Add Promos for more discounts</p>
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">Gulbarg II , Lahore,Punjab,Pakistan</li>
                <li className="phone"><a href="tel://23923929210">+92 123456789</a></li>
                <li className="email">musamarazzaq7@gmail.com</li>
              </ul>
            </div>
            <div className="block-7">
              <form action="#" method="post">
                <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                <div className="form-group">
                  <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                  <input type="submit" className="btn btn-sm btn-primary" defaultValue="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | Created <i className="icon-heart" aria-hidden="true" /> by M Usama Razzaq
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>


  </>);
}

export default Footer;