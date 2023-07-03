import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DLT, REMOVE, ADDONE, RMVALL } from '../../redux/action';
import Payment from './Payment';
import axios from 'axios'
import { Link, json } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'





const Cart = () => {

  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer);
  //localStorage.setItem("cartItem",JSON.stringify(getdata))



  const userlogin = localStorage.getItem(`user`)




  console.log("getdata___________________", getdata);
  console.log("getdata2222222222222___________________", getdata.carts);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dlt = (id) => {
    dispatch(DLT(id))
  }
  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }
  // add one
  const addone = (item) => {
    dispatch(ADDONE(item))
  }
  // add one
  const rmvall = (item) => {
    dispatch(RMVALL(item))
  }



  const total = () => {
    let price = 0;
    getdata.carts.map((ele, k) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])



  const postingData = async (e) => {
    // e.preventDefault();

    const pro = localStorage.getItem(`user`)
    if (pro) {

      getdata.userE = await JSON.parse(pro).email
      getdata.tprice = price

      let result = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client/addcheckout', {
        method: "POST",
        body: JSON.stringify(getdata),
        headers: {
          "Content-Type": "application/json",
        }
      })



      console.log("before sending", getdata)

      result = await result.json();
      console.log("result____________", result)

     // alert("Order done Successfully.");

     Swal.fire(
      'Order Placed!',
      'Your Order has been Placed.',
      'success'
    )

      rmvall(getdata)
      console.log("After sending", getdata)


    }
    else {
      alert("Login Required");
    }

  }



  const handleToken = async (token) => {



    // Send the token to your server for processing
    try {
      const responce = await axios({
        url: "https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client/charge",
        method: 'post',
        data: {
          amount: price * 100,
          token,
        }
      })
      if (responce) {
        postingData();
      }
    } catch (error) {

    }



  };





  return (
    <>

      <div className="site-wrap">

        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered">
                    {getdata.carts.length < 1 ? <> <h4>Empty cart</h4></> :

                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                    }
                    <tbody>

                      {
                        getdata.carts.map((e) => {
                          return (
                            <>

                              <tr>
                                <td className="product-thumbnail">
                                  <img src={`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/uploads/${e.filename}`} alt="Image" className="img-fluid" />
                                </td>
                                <td className="product-name">
                                  <h2 className="h5 text-black">{e.title}</h2>
                                </td>
                                <td>$ {e.price}</td>
                                <td>
                                  <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                                    <div className="input-group-prepend">
                                      <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={e.qnty <= 1 ? () => dlt(e._id) : () => remove(e)}>−</button>
                                    </div>
                                    <div className="input-group-prepend">
                                      <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={e.qnty <= 1 ? () => dlt(e._id) : () => remove(e)}>{e.qnty}</button>
                                    </div>

                                    <div className="input-group-append">
                                      <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={e.qnty <= 1 ? () => addone(e) : () => addone(e)}>+</button>
                                    </div>
                                  </div>
                                </td>
                                <td>$ {e.qnty * e.price}</td>
                                <td><a onClick={() => {
                                  dlt(e._id); toast.warn(' Product Removed From Cart', {
                                    position: "bottom-left", autoClose: 5000, hideProgressBar: false,
                                    closeOnClick: true,pauseOnHover: true,draggable: true,
                                    progress: undefined,theme: "light",
                                  });
                                }} className="btn btn-primary text-white btn-sm">X</a></td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>


                  </table>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-6">


              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase text-center">Cart Totals</h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">$ {price}</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">$ {price}</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {/* <button onClick={postingData} className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button> */}

                        {userlogin ?

                          <StripeCheckout
                            stripeKey="pk_test_51NI78tApKD4haOvDF4VAnQJbX8qHKRwvwZD4fpRAPdLqtMmtkDz9uzwFKTSEXKtvNgqYnYlIWIci4QZV5ue3MnvT003gv1m5st"
                            token={handleToken}
                            amount={price * 100} // Amount in cents
                            name="Pay bill"
                            description="Purchase Description"
                            currency="PKR"
                            label='Process to Checkout'
                            billingAddress
                            shippingAddress
                            zipCode
                          />
                          : <>
                            <Link className='btn btn-danger' to="/login">Login to checkout</Link>
                          </>

                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>






    </>
  );
}

export default Cart;