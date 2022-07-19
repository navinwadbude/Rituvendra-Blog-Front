import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/software.jpg"
import axios from "axios"
import {
  isEmailValidation,
  isPasswordValidation,
  isusernameValidation,
  checkConfirmation,
} from '../utils/utils'


export default function RegisterBody() {
  const [Success,setSucces]=useState("")

  const [email, setemail] = useState({
    value: "",
    emailerror: ""
  })
const [password, setpassword] = useState({
    value: "",
    passerror: ""
  })


const [username, setusername] = useState({
    value: "",
    usererror: ""
  })
const [cpassword, setCpassword] = useState({
    value: "",
    errorEm: "",
  });
const handleEmail = (event) => {
    setemail({
      value: event.target.value,
      emailerror: isEmailValidation(event.target.value) ? "invalid email" : "",
    });
  }
const handlePassword = (event) => {
    setpassword({
      value: event.target.value,
      passerror: isPasswordValidation(event.target.value)
        ? "password must include one uppercase and one number"
        : "",
    });
  };
const handleUsername = (event) => {
    setusername({
      value: event.target.value,
      usererror: isusernameValidation(event.target.value,)
        ? "username must be filled"
        : "",
    });
  };


  const handleConfirmPassword = (event) => {
    console.log(event.target.value)
    setCpassword({
      value: event.target.value,
      errorEm: checkConfirmation(password.value, event.target.value)
        ? ""
        : "not match",
    });
  };
 

 

  const validateform = async (e) => {
    e.preventDefault()
    const obj={
      email:email.value,
      password:password.value,
      username:username.value,
      cpassword:cpassword.value
    }
    


     axios.post("http://localhost:3000/api/controller/register", obj)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.data.message,);
      });
  }
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
        <img src={img1} className="bodypic"
          alt="" />
        <form className='container' onSubmit={validateform} name="myForm">
        <span style={{ color: "red" }}>{Success}</span>
          <div className="mb-3 ">

            <label for="InputEmail" className="form-label">Email address</label>
            <input type="text" name='email' onChange={(event) => handleEmail(event)} value={email.value} className="form-control" id="InputEmail" aria-describedby="emailHelp" />
            <span id='emailerror'>{email.emailerror}</span>

            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="InputPassword" className="form-label">Password</label>
            <input type="text" name='password' onChange={(event) => handlePassword(event)} value={password.value} className="form-control" id="InputPassword" />
            <span className='passerror'>{password.passerror}</span>

          </div>
          <div className="mb-3">
            <label for="InputName" className="form-label">Username</label>
            <input type="text" name='username' value={username.value} className="form-control" onChange={(event) => handleUsername(event)} id="InputName" />
            <span className='passerror'>{username.usererror}</span>

          </div>

          <div className="mb-3">
            <label for="InputName" className="form-label">Confirm Password</label>
            <input type="text" name='cpassword' value={cpassword.value} className="form-control" onChange={(event) => handleConfirmPassword(event)} id="InputName" />
            <span className='passerror'>{cpassword.errorEm}</span>

          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
      </div>

    </>
  )
}
