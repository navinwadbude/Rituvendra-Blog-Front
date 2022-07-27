import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import {
  REACT_GET_USER_DATA,
  REACT_GET_USER_TOKEN
} from '../utils/utils'
const Home = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect=(()=>{
    getUsers();
  },[])


  // const data = useLocation();
 
  // const detail = data.state;
  // const dec = jwt_decode(detail);
 
  const getUser = async() =>{
    const token = localStorage.getItem('accessItem')
    if(!token) return history.push("/");
        try{
            const response = await axios.get(REACT_GET_USER_DATA, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if(response.data[0]){
                setName(response.data[0].name)
                // setUsers(response.data);
            }
            else if(response.data.msg){
                const responses = await axios.get(REACT_GET_USER_TOKEN, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                await localStorage.setItem("userToken",responses.data.accesstoken)
                if(responses.data.accesstoken){
                    setToken(responses.data.accesstoken);
                    const decoded = jwt_decode(responses.data.accesstoken);
                    setName(decoded.name);
                }
                else if(response.data.msg){
                    await localStorage.removeItem("userToken")
                    history.push("/");
                }
                
            }
        }
        catch(err){
            console.log(err)
        }
    }

  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            {/* {dec.email} */}
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
