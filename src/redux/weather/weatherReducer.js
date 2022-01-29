import { WEATHER_REQUEST_SEND, WEATHER_REQUEST_SUCCESS, WEATHER_REQUEST_FAILURE } from './actionTypes';

const initialState = {
    loading: false,
    weatherData: {},
    error: ""
}

const weatherReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case WEATHER_REQUEST_SEND:
            return {
                ...state,
                loading: true,
                error: ""
            }
    

        case WEATHER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                weatherData: action.payload,
                error: ""
            }
    

        case WEATHER_REQUEST_FAILURE:
            return {
                loading: false,
                weatherData: {},
                error: action.payload
            }
    
        default:
            return state;
    }

}

export default weatherReducer;