
import Navbar from './Navbar';
import HomePage from './client/HomePage';
import SingleProduct from './client/SingleProduct';
import Products from './client/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './client/Contact';
import Footer from './Footer';
import Cart from './client/Cart';
import Login from './Login';
import Register from './Register';

import AddProduct from './admin/AddProduct';
import ProductsList from './admin/ProductsList';
import PrivateComponent from './admin/PrivateComponent';
import UpdateProduct from './admin/UpdateProduct';
import UsersList from './admin/UsersList';
import UpdateUser from './admin/UpdateUser';
import Messages from './admin/Messages';
import ManCatagory from './client/ManCatagory';
import WomanCatagory from './client/WomanCatagory';
import KidsCatagory from './client/KidsCatagory';
import PurchaseRequest from './admin/PurchaseRequest';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './ErrorPage';


function AllRouters() {
  return (
    <div className="App">
     

   < BrowserRouter>
   <ToastContainer/>
          <Navbar />
       
            <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/mancatagory' element={<ManCatagory />} />
                  <Route path='/womancatagory' element={<WomanCatagory />} />
                  <Route path='/kidscatagory' element={<KidsCatagory />} />
                  <Route path='/contact' element={<Contact/>} />
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/singleproduct' element={<SingleProduct/>} />
                  <Route path='/products/:_id' element={<SingleProduct />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />

                  <Route element={<PrivateComponent/>}>
                  <Route path='/adminAddProducts' element={<AddProduct />} />
                  <Route path='/adminProductsList' element={<ProductsList/>} />
                  <Route path='/updateproduct/:id' element={<UpdateProduct/>} />
                  <Route path='/userlist' element={<UsersList/>} />
                  <Route path='/updateuser/:id' element={<UpdateUser/>} />
                  <Route path='/messages' element={<Messages/>} />
                  <Route path='/purchaserequest' element={<PurchaseRequest/>} />
                  </Route>
                  <Route path='*' element={<ErrorPage />} />

            </Routes>  
            <Footer/>    
      </BrowserRouter>
   
    </div>
  );
}

export default AllRouters;
