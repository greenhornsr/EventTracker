import { ADD_OCCURRENCE_START, ADD_OCCURRENCE_SUCCESS, ADD_OCCURRENCE_FAILURE } from '../actions';
// import { CHECK_AUTH_START, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE, SIGNIN_START, SIGNIN_SUCCESS, SIGNED_IN, SIGNIN_FAILURE, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, SAVE_URL_START, SAVE_URL_SUCCESS, SIGN_OUT } from '../actions';

const initialState = {
    count: 0,
    active: false,
    error: '',
    message: ''
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_OCCURRENCE_START: 
        return {
            ...state,
            count: state.count += 1,
            active: true,
            message: 'PLEASE COMPLETE FORM, THEN SUBMIT.'
        }
        case ADD_OCCURRENCE_SUCCESS:
        return {
            ...state,
            active: false,
            message: 'SUCCESSFULLY ADDED EVENT!'
        }
        case ADD_OCCURRENCE_FAILURE:
        return {
            ...state,
            active: false,
            error: 'ADD FAILED.  PLEASE MAKE SURE TO FILL OUT ALL REQUIRED INFORMATION!',
            message: ''
        }
        default: return state;
    }
}