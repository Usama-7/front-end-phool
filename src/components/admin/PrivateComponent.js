import React from 'react'
import { useNavigate, Outlet, Navigate } from 'react-router-dom';

const PrivateComponent = () => {
    const Navigate = useNavigate()

    const auth = localStorage.getItem("user")
    const authRole = JSON.parse(auth)

    return auth && JSON.parse(auth).role === 1 ? <Outlet /> : <Navigate to="/product" />
}

export default PrivateComponent;