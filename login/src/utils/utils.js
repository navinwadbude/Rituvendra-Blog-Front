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
  return
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



