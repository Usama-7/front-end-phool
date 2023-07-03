import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Messages = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // Getting Notes from Server Side
  const getUserData = async () => {
    let result = await fetch("https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/messages", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    });
    result = await result.json();
    setUserData(result);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Deleting Note on the bases of id

  const deleteMessage = async (id) => {
    let res = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/deletemessage/${id}`, {
      method: "delete",
      headers: {
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    });
    res = await res.json();
    console.log(res);
    if (res) {
      getUserData();
    }
  };


  return (
    <>

      <table className="table text-black container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.length ?
            userData.map((x, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.subject}</td>
                    <td>{x.messages}</td>
                    <td>{x.createdAt.split('T')[0]} at {x.time}</td>
                    <td>
                      <a className="btn btn-success text-white " onClick={() => deleteMessage(x._id)}>
                        delete
                      </a></td>
                  </tr>
                </>
              );
            })
            : <h3>Empty Mailbox</h3>
          }

        </tbody>
      </table>


    </>
  );
};

export default Messages;
