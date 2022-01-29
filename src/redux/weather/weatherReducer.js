import { WEATHER_REQUEST_SEND, WEATHER_REQUEST_SUCCESS, WEATHER_REQUEST_FAILURE } from './actionTypes';

const initialState = {
    loading: false,
    weatherData: localStorage.getItem('weather-data') ? 
    JSON.parse(localStorage.getItem('weather-data')) : 
    {},
    error: ""
}

const setLocalStorage = (data) => {
    localStorage.setItem('weather-data', JSON.stringify(data));
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

            const weatherData = action.payload;
            setLocalStorage(weatherData);

            return {
                loading: false,
                weatherData: weatherData,
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