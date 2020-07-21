// ACTIONS
export const ADD_OCCURRENCE_START = 'ADD_OCCURRENCE_START'
export const ADD_OCCURRENCE_SUCCESS = 'ADD_OCCURRENCE_SUCCESS'
export const ADD_OCCURRENCE_FAILURE = 'ADD_OCCURRENCE_FAILURE'

// ACTION CREATOR - 
export const addOccurrence = (eventState) => dispatch => {
    // if user selects 'yes' for having an event, dispatch START/SUCCESS, else dispatch FAILURE
    eventState.occurrence === 'true' ?
    (dispatch({type: ADD_OCCURRENCE_START, payload: eventState}) &&
    dispatch({type: ADD_OCCURRENCE_SUCCESS})) :
    dispatch({type: ADD_OCCURRENCE_FAILURE})
}