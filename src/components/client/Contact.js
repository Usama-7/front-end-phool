import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [messages, setMessages] = useState('')


  const postingMessage = async (e) => {
    e.preventDefault();
    let result = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client/addcontact', {
      method: "POST",
      body: JSON.stringify({ name, email, subject, messages }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    result = await result.json();
    console.log(result)

  }


  return (

    <>

      <div className="site-wrap">

        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong></div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Get In Touch</h2>
              </div>
              <div className="col-md-7">
                <form action="#" method="post">
                  <div className="p-3 p-lg-5 border">

                    <div className="form-group row">
                      <div className="col-md-12">
                        <label htmlFor="c_email" className="text-black">Name <span className="text-danger">*</span></label>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="c_email" name="c_email" placeholder />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="c_email" name="c_email" placeholder />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label htmlFor="c_subject" className="text-black">Subject </label>
                        <input type="text" onChange={(e) => setSubject(e.target.value)} className="form-control" id="c_subject" name="c_subject" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label htmlFor="c_message" className="text-black">Message </label>
                        <textarea onChange={(e) => setMessages(e.target.value)} name="c_message" id="c_message" cols={30} rows={7} className="form-control" defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-12">
                        <input type="submit" onClick={postingMessage} className="btn btn-primary btn-lg btn-block" defaultValue="Send Message" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5 ml-auto">
                <div className="p-4 border mb-3">
                  <span className="d-block text-primary h6 text-uppercase">Lahore</span>
                  <p className="mb-0">Gulbarg II , Lahore,Punjab,Pakistan</p>
                </div>
                <div className="p-4 border mb-3">
                  <span className="d-block text-primary h6 text-uppercase">Islamabad</span>
                  <p className="mb-0">F-11 Block 3 Islamabad,Pakistan</p>
                </div>
                <div className="p-4 border mb-3">
                  <span className="d-block text-primary h6 text-uppercase">Karachi</span>
                  <p className="mb-0">Bahriya Town Karachi,Sindth,Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default Contact;