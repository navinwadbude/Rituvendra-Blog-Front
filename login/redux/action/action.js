import React from 'react'
import axios from 'axios';
import { REACT_REGISTER_BASE_URL } from '../URL/utils';
const apiAction = (obj) => {
  return (dispatch)=>{
    axios
      .post(`${REACT_REGISTER_BASE_URL}/signup`, obj)
      .then((response) => {
        dispatch({
            type:"REACT_REGISTER_BASE_URL",
            payload:response
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }
}
export {apiAction}