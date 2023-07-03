import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'


const Navbar = () => {
  const [isOffcanvasMenuOpen, setOffcanvasMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const getdata = useSelector((state) => state.cartreducer.carts);

  const logout = () => {

    console.log('auth id_______++__',JSON.parse(auth).name)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't Logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout'
    }).then((result) => {
      if (result.isConfirmed) {
       
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login")
      }
    })

    
   // localStorage.clear()
    
  };

  const toggleOffcanvasMenu = () => {
    setOffcanvasMenuOpen(!isOffcanvasMenuOpen);
  };

  return (
    <>
      <header className={`site-navbar ${isOffcanvasMenuOpen ? 'offcanvas-menu' : ''}`} role="banner">
        <div className="site-navbar-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action className="site-block-top-search">
                  <span className="icon icon-search2" />
                  <input type="text" className="form-control border-0" placeholder="Search" />
                </form>
              </div>
              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div className="site-logo">
                  <a href="index.html" className="js-logo-clone">Phoolkarian</a>
                </div>
              </div>
              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    {auth ?
                      <li><Link to="/login" onClick={logout}><span className="icon icon-person" />logout {JSON.parse(auth).name}</Link></li>
                      :
                      <li><Link to="/login"><span className="icon icon-person" />Login</Link></li>
                    }
                    <li><a href="#"><span className="icon icon-heart-o" /></a></li>
                    <li>
                      <Link to="/cart" className="site-cart">
                        <span className="icon icon-shopping_cart" />
                        <span className="count">{getdata.length}</span>
                      </Link>
                    </li>
                    <li className="d-inline-block d-md-none ml-md-0">
                      <a href="#" className={`site-menu-toggle js-menu-toggle ${isOffcanvasMenuOpen ? 'active' : ''}`} onClick={toggleOffcanvasMenu}>
                        <span className="icon-menu" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="site-navigation text-right text-md-center" role="navigation">
          <div className="container">
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li className=" ">
                <Link to="/">Home</Link>
                
              </li>
              <li className="">
                <Link to="/products">Products</Link>
                
              </li>
              <li><Link to="/contact">Contact</Link></li>

              {auth && JSON.parse(auth).role === 1 && (
                <>
                  <li><Link to="/adminAddProducts">AddProduct</Link></li>
                  <li><Link to="/adminProductsList">Product List</Link></li>
                  <li><Link to="/userlist">Users List</Link></li>
                  <li><Link to="/messages">Messages</Link></li>
                  <li><Link to="/purchaserequest">Purchase Request</Link></li>

                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
