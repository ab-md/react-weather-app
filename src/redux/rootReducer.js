import { combineReducers } from "redux";
import weatherReducer from './weather/weatherReducer';

const rootReducer = combineReducers({
    weatherState: weatherReducer
})

export default rootReducer;