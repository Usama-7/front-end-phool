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

  // const toggleOffcanvasMenu = () => {
  //   setOffcanvasMenuOpen(!isOffcanvasMenuOpen);
  // };

  return (
    <>



<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Phoolkarian</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
                
              </li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

              {auth && JSON.parse(auth).role === 1 && (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/adminAddProducts">AddProduct</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/adminProductsList">Product List</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/userlist">Users List</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/messages">Messages</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/purchaserequest">Purchase Request</Link></li>

                </>
              )}

{auth ?
                      <li><Link className="nav-link" to="/login" onClick={logout}><span className="icon icon-person" />logout {JSON.parse(auth).name}</Link></li>
                      :
                      <li><Link className="nav-link" to="/login"><span className="icon icon-person" />Login</Link></li>
                    }
                    <li>
                      <Link  to="/cart" className="site-cart nav-link">
                        <span className="icon icon-shopping_cart" />
                        <span className="count">{getdata.length}</span>
                      </Link>
                    </li>
        
      </ul>
      
    </div>
  </div>
</nav>






     
    </>
  );
};

export default Navbar;
