import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Privateroute = () => {

    const token = localStorage.getItem("accessItem")
    console.log(token,"token");
if (!token) {
return <Navigate to={"/home"} replace/>    
}   
  return <Outlet/>
}

export default Privateroute
