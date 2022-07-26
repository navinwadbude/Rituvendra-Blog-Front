import React from 'react'
const initialState={}
const apiReducer = (state=initialState,action) => {
    const {type,payload}=action
    switch (type) {
        case "REACT_REGISTER_BASE_URL":
           return {...payload.data}
        default:
           return initialState;
    }
}
export {apiReducer}
