import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductList = () => {
  const [userData, setUserData] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();


  //fatch data

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/images', {

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


  const deleteUser = async (id) => {


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



        let res = await fetch(`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/admin/deleteproduct/${id}`, {
          method: "delete",
          headers: {
            authorization: JSON.parse(localStorage.getItem("token"))
          }
        });
        res = await res.json();
        console.log(res);
        if (res) {
          fetchImages();
        }



      }
    })




    
  };


  return (
    <>

      <table className="table text-black container">
        <thead>
          <tr>
            
            <th scope="col-1">#</th>
            <th style={{width: "15%"}} scope="col-2">Title</th>
            <th style={{width: "30%"}} scope="col-4">Discription</th>
            <th scope="col-1">Price in PKR</th>
            <th scope="col-1">Catagory</th>
            <th scope="col-1">Image</th>
            <th scope="col-2">Update & Delete</th>
          </tr>
        </thead>
        <tbody>
          {images.length ?
            images.map((x, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{x.title}</td>
                    <td style={{textAlign:"justify"}}>{x.disc}</td>
                    <td>{x.price}</td>
                    <td>{x.catagory}</td>
                    <td>

                      <img width={100} height={100} src={`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/uploads/${x.filename}`} alt={x.title} />
                    </td>
                    <td><a
                      className="btn btn-danger mr-3 text-white "
                      onClick={() => navigate(`/updateproduct/${x._id}`)}
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
            : <Link to="/adminAddProducts" className="btn  mt-4" style={{ backgroundColor: "#554c86", color: "white" }} type="submit">Add First Product</Link>
          }

        </tbody>
      </table>









    </>
  );
};

export default ProductList;
