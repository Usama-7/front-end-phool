import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";




const UpdateProduct = () => {


  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState('')
  const [disc, setDisc] = useState('')
  const [price, setPrice] = useState('')
  const [catagory, setCatagory] = useState('')

  useEffect(() => {
    getUserData();
  }, [])

  // Getting Notes on the basis of Id for editing purpose as pre-filled form data
  const getUserData = async () => {
    console.log(params)
    let result = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/singleproduct/${params.id}`, {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    });

    result = await result.json();
    setTitle(result.title)
    setDisc(result.disc)
    setPrice(result.price)
    setCatagory(result.catagory)


  }

  // Updating / Editing Data on the basis of dynamic id
  const updatingData = async (e) => {
    e.preventDefault();
    let result = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/updateproduct/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, disc, price, catagory }),
      headers: {
        'Content-Type': "Application/json",
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    })

    result = await result.json()
    if (result) {
      navigate('/adminProductsList')
    }
  }

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#e9e4db" }}>


        <div className="container ps-5 py-3 my-3" style={{ backgroundColor: '#eee', textAlign: "left" }}>
          <h2 className='my-3' style={{ textAlign: "center", color: "#554c86" }}><span style={{ borderBottom: "5px solid #554c86" }}>Update Note</span></h2><br />
          <div className="col-md-7">
            <div className="well">
              <form className='my-3' acceptCharset="UTF-8" action method="POST"> Title
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter your email address" className="form-control input-lg mb-3" /> Note
                <textarea value={disc} onChange={(e) => setDisc(e.target.value)} className="form-control mb-3" id="text" name="text" placeholder="Type in your message" rows={5} defaultValue={""} />
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter your email address" className="form-control input-lg mb-3" /> Note


                <label className="form-label">Product Catagory</label>
                <select value={catagory} onChange={(e) => setCatagory(e.target.value)} className="form-control">
                  <option selected>Select Catagory</option>
                  <option value="man" >Man</option>
                  <option value="woman">Woman</option>
                  <option value="kids" >Kids</option>
                </select>


                <button onClick={updatingData} to="/addnode" className="btn mt-2" style={{ backgroundColor: "#554c86", color: "white" }} type="submit">Update Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;