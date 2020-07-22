import { ADD_OCCURRENCE_START, ADD_OCCURRENCE_SUCCESS, ADD_OCCURRENCE_FAILURE, RESET_FORM_START } from '../actions';

const initialState = {
    count: 0,
    occurrence: false,
    error: '',
    message: ''
}

export default function occurrences(state = initialState, action) {
    switch(action.type) {
        case ADD_OCCURRENCE_START: 
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
        case RESET_FORM_START: 
        return {
            ...state,
            error: '',
        }
        default: return state;
    }
}