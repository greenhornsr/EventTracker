import { ADD_OCCURRENCE_START, ADD_OCCURRENCE_SUCCESS, ADD_OCCURRENCE_FAILURE } from '../actions';
// import { CHECK_AUTH_START, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE, SIGNIN_START, SIGNIN_SUCCESS, SIGNED_IN, SIGNIN_FAILURE, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, SAVE_URL_START, SAVE_URL_SUCCESS, SIGN_OUT } from '../actions';

const initialState = {
    count: 0,
    occurrence: false,
    error: '',
    message: ''
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_OCCURRENCE_START: 
        // console.log("action: ", action)
        return {
            ...state,
            count: state.count + action.payload.count,
            occurrence: true
        }
        case ADD_OCCURRENCE_SUCCESS:
        return {
            ...state,
            occurrence: false,
            message: 'SUCCESSFULLY ADDED EVENT!'
        }
        case ADD_OCCURRENCE_FAILURE:
        return {
            ...state,
            occurrence: false,
            error: 'ADD FAILED.  PLEASE MAKE SURE TO FILL OUT ALL REQUIRED INFORMATION!',
            message: ''
        }
        default: return state;
    }
}