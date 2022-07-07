

export const emailValidation = (name,value) =>{

      let regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!(regexpass.test(value))) {
        return true
      } else {
        return false
      }
}