// ACTIONS
export const ADD_OCCURRENCE_START = 'ADD_OCCURRENCE_START'
export const ADD_OCCURRENCE_SUCCESS = 'ADD_OCCURRENCE_SUCCESS'
export const ADD_OCCURRENCE_FAILURE = 'ADD_OCCURRENCE_FAILURE'

// ACTION CREATOR - 
export const addOccurrence = () => dispatch => {
    dispatch({type: ADD_OCCURRENCE_START})
    dispatch({type: ADD_OCCURRENCE_SUCCESS})
    dispatch({type: ADD_OCCURRENCE_FAILURE})
}