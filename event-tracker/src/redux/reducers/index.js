import { combineReducers } from 'redux';

// Reducers
import occurrences from './occurrences';
import eventdetails from './eventdetails';


const rootReducer = combineReducers({occurrences, eventdetails})

export default rootReducer;