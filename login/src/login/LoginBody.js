import { useState } from 'react'
import react from 'react'
import axios from "axios"
import img2 from "../images/bodypic.jpg"
import { Link,useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import {
  isEmailValidation,
  isPasswordValidation
} from '../utils/utils'

export default function LoginBody() {
  const [Success, setSucces] = useState();

  const [email, setemail] = useState({
    value: "",
    emailerror: ""
  })
  const navigate = useNavigate();


  const [password, setpassword] = useState({
    value: "",
    passerror: ""
  })
  const [error, seterror] = useState({
    email: "",
    password: ""
  })
  
  
  const validateform = (e) => {
    e.preventDefault()
    
    const obj={
      email:email.value,
      password:password.value
    }
    axios.post("http://localhost:3000/api/controller/login",obj)
    .then(async(response)=>{
      const token=response.data.accessToken
      console.log(token)
      const decodedToken= await jwt_decode(token);
      console.log(decodedToken)
      console.log(response)
      setSucces(response.data.message)
      localStorage.setItem("accessItem",token)
      navigate("/home", { replace: true, useData: response.data, state: token });
    })
    .catch((error) => {
      console.log(error.message,);
      setSucces(error.message);
    });
  }
  const handleEmail = (event) => {
    setemail({
      value: event.target.value,
      emailerror: isEmailValidation(event.target.value) ? "invalid email" : "",
    });
  };
  const handlePassword = (event) => {
    setpassword({
      value: event.target.value,
      passerror: isPasswordValidation(event.target.value,)
      ? "password must greater than 6"
      : "",
    });
  };
  
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Register</Link>

        </li>
        <li>
          <Link to={"/login"}>Login</Link>

        </li>
      </ul>
      <div className='container' >
        <img src={img2} alt="" />
        <form className='container' onSubmit={validateform} name="myForm">
         <span style={{ color: "red" }}>{Success}</span>
          <div className="mb-3 ">

            <label for="InputEmail" className="form-label">Email address</label>
            <input type="email" name='email' onChange={(event) => handleEmail(event)} value={email.value} className="form-control" id="InputEmail" aria-describedby="emailHelp" />{error && <span className='emailerror' id=''></span>}


            <span id='emailerror'>{email.emailerror}</span>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="InputPassword" className="form-label">Password</label>
            <input type="text" name='password' className="form-control" value={password.value} id="InputPassword" onChange={(event) => handlePassword(event)} />
            <span className='passerror'>{password.passerror}</span>

          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       
      </div>

    </>
  )
}
