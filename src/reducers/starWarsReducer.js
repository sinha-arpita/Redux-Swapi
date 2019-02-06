import {FETCHING,SUCCESS,FAILURE}from  "../actions";
const initialState = {
  characters: [],
  fetching:false,
  error:null

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("Action is " + action.type);
  switch (action.type) {

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
     case FETCHING:
       return {...state,fetching:true,characters:[],error:null}

    case SUCCESS:
      return {...state,fetching:false,characters:action.payload,error:null}

    case FAILURE:
      return {...state,fetching:false,characters:[],error:action.payload}


    default:
      return state;
  }
};
