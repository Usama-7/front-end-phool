import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const Products = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);


  useEffect(() => {
    fetchImages();
  }, []);


  const fetchImages = async () => {
    try {
      const response = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client/imageshow', {

        headers: {
          authorization: JSON.parse(localStorage.getItem("token"))
        }
      });
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  // Function to handle search input change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter the product list based on the search term
    const filtered = images.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <>

      <div className="site-wrap">

        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Products</strong></div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-9 order-2">
                <div className="row">
                  <div className="col-md-12 mb-5">
                    <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                    <div className="d-flex">
                      <div className="dropdown mr-1 ml-md-auto">
                        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Latest
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                          <a className="dropdown-item" href="#">Men</a>
                          <a className="dropdown-item" href="#">Women</a>
                          <a className="dropdown-item" href="#">Children</a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                          <a className="dropdown-item" href="#">Relevance</a>
                          <a className="dropdown-item" href="#">Name, A to Z</a>
                          <a className="dropdown-item" href="#">Name, Z to A</a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">Price, low to high</a>
                          <a className="dropdown-item" href="#">Price, high to low</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form action className="site-block-top-search mb-5">
                  <span className="icon icon-search2" />
                  <input value={searchTerm} onChange={handleSearch} type="text" className="form-control border-0" placeholder="Search" />
                </form>

                {

                  loading ? <div className="mb-5" style={{ marginLeft: "50%" }}>
                    <RingLoader color="#7971ea" />
                  </div>

                    :

                    <>
                      <div className="row mb-5">

                        {

                          filteredProducts.length > 0
                            ? filteredProducts.map((x) =>

                              <>
                                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                  <div className="block-4 text-center border">
                                    <figure className="block-4-image">
                                      <Link to={`/products/${x._id}`}><img src={`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/uploads/${x.filename}`} alt="Image placeholder" className="img-fluid" /></Link>
                                    </figure>
                                    <div className="block-4-text p-4">
                                      <p className="mb-0"> <Link to={`/products/${x._id}`}>{x.title}</Link></p>
                                      <p className="text-primary font-weight-bold">${x.price}</p>
                                    </div>
                                  </div>
                                </div>

                              </>
                            )

                            :
                            images.length > 0 &&
                            images.map((x) => (

                              <>

                                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                  <div className="block-4 text-center border">
                                    <figure className="block-4-image">
                                      <Link to={`/products/${x._id}`}><img src={`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/uploads/${x.filename}`} alt="Image placeholder" className="img-fluid" /></Link>
                                    </figure>
                                    <div className="block-4-text p-4">


                                      <p className="mb-0"> <Link to={`/products/${x._id}`}>{x.title}</Link></p>

                                      <p className="text-primary font-weight-bold">Rs.{x.price}</p>
                                    </div>
                                  </div>
                                </div>

                              </>
                            ))}


                      </div>
                    </>
                }

              </div>
              <div className="col-md-3 order-1 mb-5 mb-md-0">
                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1"><Link to="/mancatagory" className="d-flex"><span>Men </span> <span className="text-black ml-auto"></span></Link></li>
                    <li className="mb-1"><Link to="/womancatagory" className="d-flex"><span>Womensss</span> <span className="text-black ml-auto"></span></Link></li>
                    <li className="mb-1"><Link to="/kidscatagory" className="d-flex"><span>Children</span> <span className="text-black ml-auto"></span></Link></li>
                  </ul>
                </div>
               
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  );
}

export default Products;