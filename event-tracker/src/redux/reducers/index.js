import { combineReducers } from 'redux';

// Reducers
import occurrences from './occurrences';


const rootReducer = combineReducers({occurrences})

export default rootReducer;