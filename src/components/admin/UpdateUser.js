import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";




const UpdateUser = () => {


  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    getUserData();
  }, [])

  // Getting Notes on the basis of Id for editing purpose as pre-filled form data
  const getUserData = async () => {
    console.log(params)
    let result = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/singleuser/${params.id}`, {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    });
    console.log(result)
    result = await result.json();
    setName(result.name)
    setEmail(result.email)
    setRole(result.role)


  }


  // Updating / Editing Data on the basis of dynamic id
  const updatingData = async (e) => {
    e.preventDefault();
    let result = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/updateuser/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, email, role }),
      headers: {
        'Content-Type': "Application/json",
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    })
    result = await result.json()
    if (result) {
      navigate('/userlist')
    }
  }

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#e9e4db" }}>


        <div className="container ps-5 py-3 my-3" style={{ backgroundColor: '#eee', textAlign: "left" }}>
          <h2 className='my-3' style={{ textAlign: "center", color: "#554c86" }}><span style={{ borderBottom: "5px solid #554c86" }}>Update User</span></h2><br />
          <div className="col-md-7">
            <div className="well">
              <form className='my-3' acceptCharset="UTF-8" action method="POST"> Name
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your email address" className="form-control input-lg mb-3" /> Email
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" className="form-control input-lg mb-3" /> Chose Role

                <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
                  <option value="0" style={{ backgroundColor: "lightblue" }}>Client</option>
                  <option value="1" style={{ backgroundColor: "#baa9ba" }}>Admin</option>
                </select>


                <button onClick={updatingData} to="/addnode" className="btn mt-2" style={{ backgroundColor: "#554c86", color: "white" }} type="submit">Update User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;