import {combineReducers} from 'redux';
import CityReducers from './cityreducer';

const rootReducer = combineReducers({
	cityreducer:CityReducers
});

export default rootReducer;