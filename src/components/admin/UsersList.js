import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2'


const UsersList = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // Getting Notes from Server Side
  const getUserData = async () => {
    let result = await fetch("https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/userlist", {
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

  const deleteUser = async (id) => {

    const loginuser = localStorage.getItem("user")
    if (JSON.parse(loginuser)._id != id) {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {



          let res = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/deleteuser/${id}`, {
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



        }
      })


    }
    else {
      Swal.fire({
        title: 'Error!',
        text: "You can't detele this user",
        icon: 'error',
        confirmButtonText: 'Acknowledged'
      })
    }
  };


  return (
    <>

      <table className="table text-black">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Update & Delete</th>
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
                    <td>
                      {
                        x.role == 0 ? "Client" : "Admin"
                      }
                    </td>
                    <td><a
                      className="btn btn-danger mr-3 text-white "
                      onClick={() => navigate(`/updateuser/${x._id}`)}
                    >
                      Edit
                    </a>
                      <a className="btn btn-success text-white " onClick={() => deleteUser(x._id)}>
                        delete
                      </a></td>
                  </tr>
                </>
              );
            })
            : <Link to="/register" className="btn  mt-4" style={{ backgroundColor: "#554c86", color: "white" }} type="submit">Add User</Link>
          }

        </tbody>
      </table>


    </>
  );
};

export default UsersList;
