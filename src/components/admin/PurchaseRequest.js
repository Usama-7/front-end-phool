import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const PurchaseRequest = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // Getting Notes from Server Side
  const [checkoutData, setCheckoutData] = useState([]);

  useEffect(() => {
    fetchCheckoutData();
  }, []);

  const fetchCheckoutData = async () => {
    try {
      const response = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client/getcheckout');
      const data = await response.json();
      setCheckoutData(data);
    } catch (error) {
      console.error('Error fetching checkout data:', error);
    }
  };

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

    }
  };

  return (
    <>

      <table className="table text-black container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Date</th>
            <th scope="col">Product Title</th>
            <th scope="col">Quantity</th>
            <th scope="col" >Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {

            checkoutData.length > 0 ?
              checkoutData.map((checkout, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <th scope="row"> {checkout.userE}</th>
                      <th scope="row"> {checkout.products[0].updatedAt.split('T')[0]}</th>
                      <td>
                        {checkout.products.map((x) => <>
                          <p>{x.title}</p>
                        </>)}
                      </td>

                      <td>
                        {checkout.products.map((x) => <>
                          <p>{x.qnty}</p>
                        </>)}
                      </td>

                      <th  scope="row">Rs. {checkout.tprice}</th>
                      
                    </tr>
                  </>
                );
              })
              : <h3>Empty Purchase Request</h3>
          }

        </tbody>
      </table>






    </>
  );
};

export default PurchaseRequest;
