export const REACT_LOGIN_BASE_URL="http://localhost:3000/api/controller/login"
export const REACT_REGISTER_BASE_URL="http://localhost:3000/api/controller/register"
export const REACT_GET_USER_DATA="http://localhost:3000/api/controller/getUserData"
export const REACT_GET_USER_TOKEN="http://localhost:3000/api/controller/token"
 export const REACT_GET_USER_LOGOUT ="http://localhost:3000/api/controller/logout"

export const handleSubmitCheck = (values, setError) => {
  let error = {};
  const { cpassword, email, password, username } = values;

  if (!username) {
    error.username = "*username should not be empty ";
  }
  if (!email) {
    error.email = "*email should not be empty";
  }

  if (!password) {
    error.password = "*password should not be empty";
  }

  if (!cpassword) {
    error.cpassword = "*confirm password should not be empty";
  }
  return (error)
};

export const isEmailValidation = (value) => {
  const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !validEmail.test(value)
}
export const isPasswordValidation = (value) => {
  const regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return (!regexpass.test(value))
}


export const checkConfirmation = (password, cpassword) => {
  return password === cpassword
}
export const isusernameValidation = (value) => {
  if (value === "") {
    return true
  }
}



