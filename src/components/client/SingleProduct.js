import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/action';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const SingleProduct = () => {

  const navigate = useNavigate();


  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const sendwithuser = async () => {

    console.log(images)
    send(images)
    toast.success(' Product Added to Cart', {
      position: "bottom-left", autoClose: 5000, hideProgressBar: false,
      closeOnClick: true, pauseOnHover: true, draggable: true,
      progress: undefined, theme: "light",
    })

  }

  images.quan = quantity

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client//singleproduct/${_id}`, {

        headers: {
          authorization: JSON.parse(localStorage.getItem("token"))
        }
      });
      const data = await response.json();
      setImages(data);
      console.log(images)
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  let { _id } = useParams();

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }


  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <>

      {/* {!images.title ? <h1>Product not found</h1> : <> */}

        <div className="site-wrap">
          <div className="bg-light py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-0">
                  <Link to="/">Home</Link>{" "}
                  <span className="mx-2 mb-0">/</span>{" "}
                  <Link to="/products">Products</Link>{" "}
                  <span className="mx-2 mb-0">/</span>{" "}
                  <strong className="text-black">{images.title}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/uploads/${images.filename}`}
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="text-black mb-3">{images.title}</h2>
                  <p style={{ textAlign: "justify" }}>
                    {images.disc} are the epitome of casual chic. Crafted with care, they boast a simple yet stylish design that effortlessly complements any summer outfit. The light brown color adds a touch of warmth and versatility, making them suitable for both casual and semi-formal occasions. The sandals feature comfortable straps that wrap around the foot, providing a secure and snug fit. The cushioned insole ensures all-day comfort, while the sturdy outsole offers excellent traction on various surfaces. Whether you're strolling along the beach or attending a garden party, these light brown sandals will elevate your style and keep your feet happy all day long.
                  </p>

                  <p>
                    <strong className="text-primary h4">
                      Rs. {images.price}
                    </strong>
                  </p>

                  <div className="mb-5">
                    <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                      <div className="input-group-prepend">
                        <button onClick={decreaseQuantity}
                          className="btn btn-outline-primary js-btn-minus"
                          type="button"
                        >
                          −
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={quantity}
                        placeholder
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <div className="input-group-append">
                        <button onClick={increaseQuantity}
                          className="btn btn-outline-primary js-btn-plus"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <a
                      onClick={sendwithuser}

                      className="buy-now btn btn-sm btn-primary text-white"
                    >
                      Add To Cart
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      {/* </>
    } */}
    </>
  );
};

export default SingleProduct;
