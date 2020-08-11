import { Question_IS_SUCCESS } from "../actions/actionsTypes";


const initialQuestionState = {
   allQuestion:[]
  };

export default function  question(state = initialQuestionState, action) {

    switch(action.type)
    {
       
            case Question_IS_SUCCESS:

            return {
                ...state,
               allQuestion:action.data
            }

            default: return state;

    }
  
}
