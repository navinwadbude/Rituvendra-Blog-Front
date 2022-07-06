import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../images/software.jpg"


export default function RegisterBody() {
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


    let username=document.getElementById("InputName").value
    debugger
    if(!(username.length>5)&& username==""){
      document.getElementById("nameerror").innerHTML="* please enter valid username"
    } 
    else{
      document.getElementById("nameerror").innerHTML=""
    }



    let mobileno=document.getElementById("InputMob").value
    debugger
    if(!(mobileno.length>10)){
      document.getElementById("moberror").innerHTML="* please enter 10 digit no"
    } 
    else{
      document.getElementById("moberror").innerHTML=""
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
        <img src={img1} className="bodypic"
          alt="" />
        <form className='container' onSubmit={validateform} name="myForm">
          <div className="mb-3 ">
            <label for="InputEmail" className="form-label">Email address</label>
            <input type="text" name='email'  className="form-control"id="InputEmail" aria-describedby="emailHelp" />
            <span id='emailerror'></span>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="InputPassword" className="form-label">Password</label>
            <input type="text" name='password' className="form-control" id="InputPassword" />
            <span id='passerror'></span>
          </div>
          <div className="mb-3">
            <label for="InputName" className="form-label">Username</label>
            <input type="text" name='username' className="form-control" id="InputName" />
            <span id='nameerror'></span>
          </div>
          <div className="mb-3">
            <label for="InputMob" className="form-label">MobileNo</label>
            <input type="text" name='mobileno' className="form-control" id="InputMob" />
            <span id='moberror'></span>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" name='submit' />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )
  }
