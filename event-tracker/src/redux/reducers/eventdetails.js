import { ADD_EVENT_DETAILS_START, ADD_EVENT_DETAILS_SUCCESS, ADD_EVENT_DETAILS_FAILURE } from '../actions';

const initialState = {
    intensity: 'select',
    headache: 'select',
    duration: 0,
    waterconsumption: 0,
    error: '',
    message: ''
}

export default function eventdetails(state = initialState, action) {
    switch(action.type) {
        case ADD_EVENT_DETAILS_START: 
        return {
            ...state,
            intensity: action.payload.intensity,
            headache: action.payload.headache, 
            duration: action.payload.duration,
            waterconsumption: action.payload.waterconsumption
        }
        case ADD_EVENT_DETAILS_SUCCESS:
        return {
            ...state,
            intensity: 'select',
            headache: 'select',
            duration: 0,
            waterconsumption: 0,
            message: 'SUCCESSFULLY ADDED EVENT!'
        }
        case ADD_EVENT_DETAILS_FAILURE:
        return {
            ...state,
            error: 'ADD FAILED.  PLEASE MAKE SURE TO FILL OUT ALL REQUIRED INFORMATION!',
        }
        default: return state;
    }
}