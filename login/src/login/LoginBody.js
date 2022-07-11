import { useState } from 'react'
import react from 'react'

import img2 from "../images/bodypic.jpg"
import { Link } from 'react-router-dom'

import {
  isEmailValidation,
  isPasswordValidation
} from '../utils/utils'

export default function LoginBody() {
  const [email, setemail] = useState({
    value: "",
    emailerror: ""
  })

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
