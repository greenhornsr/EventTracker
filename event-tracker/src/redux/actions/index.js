// ADD_OCCURRENCE ACTIONS
export const ADD_OCCURRENCE_START = 'ADD_OCCURRENCE_START'
export const ADD_OCCURRENCE_SUCCESS = 'ADD_OCCURRENCE_SUCCESS'
export const ADD_OCCURRENCE_FAILURE = 'ADD_OCCURRENCE_FAILURE'

// ADD_OCCURRENCE ACTION CREATOR - 
export const addOccurrence = (eventState) => dispatch => {
    // if user selects 'yes' for having an event, dispatch START/SUCCESS, else dispatch FAILURE
    eventState.occurrence === 'true' ?
    (dispatch({type: ADD_OCCURRENCE_START, payload: eventState}) &&
    dispatch({type: ADD_OCCURRENCE_SUCCESS})) :
    dispatch({type: ADD_OCCURRENCE_FAILURE})
}


// RESET_FORM ACTIONS
export const RESET_FORM_START = 'RESET_FORM_START'
export const RESET_FORM_SUCCESS = 'RESET_FORM_SUCCESS'

// RESET_FORM ACTION CREATOR - 
export const resetForm = () => dispatch => {
    dispatch({type: RESET_FORM_START})
}


// ADD_EVENT_DETAILS ACTIONS
export const ADD_EVENT_DETAILS_START = 'ADD_EVENT_DETAILS_START'
export const ADD_EVENT_DETAILS_SUCCESS = 'ADD_EVENT_DETAILS_SUCCESS'
export const ADD_EVENT_DETAILS_FAILURE = 'ADD_EVENT_DETAILS_FAILURE'

// ADD_EVENT_DETAILS ACTION CREATOR - 
export const addEventDetails = (formDetailState) => dispatch => {
    dispatch({type: ADD_EVENT_DETAILS_START})
    dispatch({type: ADD_EVENT_DETAILS_SUCCESS})
    // dispatch({type: ADD_EVENT_DETAILS_FAILURE})
}