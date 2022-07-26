import React from 'react'
import axios from 'axios';
import { REACT_REGISTER_BASE_URL } from '../URL/utils';
const apiAction = (obj) => {
  return (dispatch)=>{
    axios
      .post(`${REACT_REGISTER_BASE_URL}/signup`, obj)
      .then((res) => {
        dispatch({
            type:"REACT_REGISTER_BASE_URL",
            payload:res
        })
      })
      .catch((error) => {
      });
  }
}
export {apiAction}