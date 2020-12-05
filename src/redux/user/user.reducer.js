import { userActionTypes } from "./user.types";

const INITAL_STATE = {
    CurrentUser: null
}

const userReducer = ( state = INITAL_STATE, action ) => {
    const { SET_CURRENT_USER } = userActionTypes;
    switch ( action.type ) {
        case SET_CURRENT_USER:
            return {
                ...state,
                CurrentUser: action.payload
            }
    
        default:
            return state
    }
}

export default userReducer