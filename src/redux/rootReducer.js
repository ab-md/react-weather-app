import { combineReducers } from "redux";
import weatherReducer from './weather/weatherReducer';

const rootReducer = combineReducers({
    weatherData: weatherReducer
})

export default rootReducer;