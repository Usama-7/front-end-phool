import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ManCatagory = () => {

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
    } catch (error) {
      console.error('Error fetching images:', error);
    }
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
                <div className="row mb-5">

                  {images.length > 0 &&
                    images.filter(man => man.catagory == "man").map((x) => (

                      <>

                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                          <div className="block-4 text-center border">
                            <figure className="block-4-image">
                              <Link to={`/products/${x._id}`}><img src={`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/uploads/${x.filename}`} alt="Image placeholder" className="img-fluid" /></Link>
                            </figure>
                            <div className="block-4-text p-4">


                              <p className="mb-0"> <Link to={`/products/${x._id}`}>{x.title}</Link></p>

                              <p className="text-primary font-weight-bold">{x.price}</p>
                            </div>
                          </div>
                        </div>

                      </>
                    ))}


                </div>

              </div>
              <div className="col-md-3 order-1 mb-5 mb-md-0">
                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1"><Link to="/mancatagory" className="d-flex"><span>Men</span> <span className="text-black ml-auto"></span></Link></li>
                    <li className="mb-1"><Link to="/womancatagory" className="d-flex"><span>Women</span> <span className="text-black ml-auto"></span></Link></li>
                    <li className="mb-1"><Link to="/kidscatagory" className="d-flex"><span>Children</span> <span className="text-black ml-auto"></span></Link></li>
                  </ul>
                </div>
                <div className="border p-4 rounded mb-4">
                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                    <div id="slider-range" className="border-primary" />
                    <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
                  </div>
                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                    <label htmlFor="s_sm" className="d-flex">
                      <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
                    </label>
                    <label htmlFor="s_md" className="d-flex">
                      <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
                    </label>
                    <label htmlFor="s_lg" className="d-flex">
                      <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                    <a href="#" className="d-flex color-item align-items-center">
                      <span className="bg-danger color d-inline-block rounded-circle mr-2" /> <span className="text-black">Red (2,429)</span>
                    </a>
                    <a href="#" className="d-flex color-item align-items-center">
                      <span className="bg-success color d-inline-block rounded-circle mr-2" /> <span className="text-black">Green (2,298)</span>
                    </a>
                    <a href="#" className="d-flex color-item align-items-center">
                      <span className="bg-info color d-inline-block rounded-circle mr-2" /> <span className="text-black">Blue (1,075)</span>
                    </a>
                    <a href="#" className="d-flex color-item align-items-center">
                      <span className="bg-primary color d-inline-block rounded-circle mr-2" /> <span className="text-black">Purple (1,075)</span>
                    </a>
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

export default ManCatagory;