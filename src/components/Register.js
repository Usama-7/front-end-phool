import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'


const Register = () => {


  const navigate = useNavigate();


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')



  const postingData = async (e) => {
    e.preventDefault();
    let result = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/auth/register', {
      method: "POST",
      body: JSON.stringify({ name, email, password, address, phone }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    result = await result.json();
    console.log(result)

    if (result.message == "User already registeerd")
    {
      Swal.fire({
        title: 'Email already Registered',
        text: 'Login to continue',
        icon: 'info',
        confirmButtonText: 'Login'
      })
      navigate("/login")
    }
    else
{
    localStorage.setItem("user", JSON.stringify(result.user))
    localStorage.setItem("user_id", JSON.stringify(result._id))
    localStorage.setItem("token", JSON.stringify(result.token))
    toast.success('Register Successfully')
    navigate("/products")
}

  }


  return (
    <>

      <div>
        <br />
        <br />
        <div className="container" style={{ marginTop: "5%", marginBottom: "10%" }}>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-body">
                    <h1>Register</h1>
                    <p className="text-muted">Register your account</p>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="fa fa-user" /></span>
                      <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="fa fa-user" /></span>
                      <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon"><i className="fa fa-lock" /></span>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="fa fa-user" /></span>
                      <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Address" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="fa fa-user" /></span>
                      <input onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button onClick={postingData} type="button" className="btn btn-primary px-4">Register</button>
                      </div>
                      <div className="col-6 text-right">
                        <Link to="/login">Have Account?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <div className="card-body text-center">
                    <div>
                      <h2>Sign in</h2>
                      <p>Log in to your account for a seamless shopping experience, personalized recommendations, and easy access to your order history and preferences.</p>
                      <Link className="btn btn-primary active mt-3" to="/login">Login Now!</Link>
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

export default Register;