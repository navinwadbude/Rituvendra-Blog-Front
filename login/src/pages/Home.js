import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import {
  REACT_GET_USER_DATA
} from '../utils/utils'
const Home = () => {


  const data = useLocation();
 
  const detail = data.state;
  const dec = jwt_decode(detail);
 

  useEffect(() => {
    
     axios
    .get(REACT_GET_USER_DATA, {
      headers: { Authorization: `Bearer ${detail}` },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            {dec.email}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="bgimage">
        </div>
      </div>
    </>
  );
};

export default Home;
