import TYPE_REACT_REGISTER_BASE_URL from "./ActionType"
import TYPE_REACT_LOGIN_BASE_URL from "./ActionType"



// Action login
 export const login=()=>{
    return  {
 type:TYPE_REACT_LOGIN_BASE_URL
    }
}
  //Action register
export const register=()=>{
    return  {
 type:TYPE_REACT_REGISTER_BASE_URL
    }
}