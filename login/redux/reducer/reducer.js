import { type } from 'express/lib/response'
import React from 'react'
const initialState={}
const rootReducer = (state=initialState,action) => {
    switch (type.action) {
        case "REACT_REGISTER_BASE_URL":
           return {...payload.data}
        } 
        switch(type.action){
            case "TYPE_REACT_REGISTER_BASE_URL":
                return{...payload.data}
                
      default:
          return state
    }
}
export {rootReducer}
