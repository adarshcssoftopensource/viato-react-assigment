import { combineReducers } from 'redux';

import exampleReducer from './example';
import hotelReducer from "./hotelcheckout"

const rootReducer = combineReducers({
	example: exampleReducer,
	hotel: hotelReducer
});

export default rootReducer;
