import React from 'react'
import img2 from "../../images/bodypic.jpg"
import { Link } from 'react-router-dom'


export default function LoginBody() {
  const validateform=(e)=>{
    e.preventDefault()

    let email=document.getElementById('InputEmail').value
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!pattern.test(email)){
      document.getElementById("emailerror").innerHTML=" * please enter valid email"
    }
    else{
      document.getElementById("emailerror").innerHTML=""
    }


    let password=document.getElementById("InputPassword").value
    let regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!regexpass.test(password)){
      document.getElementById("passerror").innerHTML="* Minimum eight characters, at least one letter and one number"
    } 
    else{
      document.getElementById("passerror").innerHTML=""
    }


    

    

  }
  return (
    <>
    <ul>
          <li>
      <Link  to={"/"}>Register</Link>

          </li>
          <li>
      <Link  to={"/login"}>Login</Link>

          </li>
        </ul>
      <div className='container' >
      <img src={img2} alt=""/>
        <form className='container' onSubmit={validateform} name="myForm">
          <div className="mb-3 ">
            <label for="InputEmail" className="form-label">Email address</label>
            <input type="text" name='email'  className="form-control" id="InputEmail" aria-describedby="emailHelp" />
            <span id='emailerror'></span>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="InputPassword" className="form-label">Password</label>
            <input type="text" name='password' className="form-control" id="InputPassword" />
            <span id='passerror'></span>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )
  }
