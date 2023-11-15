/* eslint-disable no-case-declarations */
import {CHANGE} from '../types/form_types';

const initialState = {
 lengua: "",
 
};

export default function formReducer(state = initialState, action) {
 switch (action.type) {
   case CHANGE:
     return {
       ...state,
       lengua: action.payload
     };
   
  }
}
