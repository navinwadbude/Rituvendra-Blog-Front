import { react, useState } from 'react'
import img2 from "../../images/bodypic.jpg"
import { Link } from 'react-router-dom'

import {emailValidation} from '../../utils/utils'

export default function LoginBody() {
  
  const [password, setpassword] = useState(false)
  const [usererror, setusererror] = useState(false)



  const handleInput = (e) => {

    const { value, name } = e.target
    if(name==email){
      const emailValue = emailValidation(name, value)
      if(!emailValue) 
    }
    if (name === 'password') {
      let regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!(regexpass.test(value))) {
        setpassword(true)
      } else {
        setpassword(false)
      }
    }
    else if (name == 'email') {
      let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!(pattern.test(value))) {
        setusererror(true)
      } else {
        setusererror(false)
      }
    }
    // let itememail = e.target.value
    // let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!(pattern.test(itememail))) {
    //   setusererror(true)
    // } else {
    //   setusererror(false)
    // }



    // let itempassword = e.target.value
    // let regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!(regexpass.test(itempassword))) {
    //   setpassword(true)
    // } else {
    //   setpassword(false)
    // }




  }
  const validateform = (e) => {
    e.preventDefault()
    // let email=document.getElementById('InputEmail').value

    // if(!pattern.test(email)){
    //   document.getElementById("emailerror").innerHTML=" * please enter valid email"
    // }



    // let password=document.getElementById("InputPassword").value
    // let regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if(!regexpass.test(password)){
    //   document.getElementById("passerror").innerHTML="* Minimum eight characters, at least one letter and one number"
    // } 
    // else{
    //   document.getElementById("passerror").innerHTML=""
    // }






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
        <img src={img2} alt="" />
        <form className='container' onSubmit={validateform} name="myForm">
          <div className="mb-3 ">
            <label for="InputEmail" className="form-label">Email address</label>
            <input type="email" name='email' onChange={handleInput} className="form-control" id="InputEmail" aria-describedby="emailHelp" />{usererror && <span className='emailerror'>invalid email</span>}


            <span id='emailerror'></span>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="InputPassword" className="form-label">Password</label>
            <input type="text" name='password' className="form-control"  id="InputPassword"  onChange={handleInput}/>
            {password && <span className='passerror'>Minimum eight characters, at least one letter and one number</span>}
            <span id='passerror'></span>
          </div>
          {usererror || password ? <button type="submit" className="btn btn-primary" disabled>Submit</button> : <button type="submit" className="btn btn-primary"  >Submit</button>}
        </form>
      </div>

    </>
  )
}