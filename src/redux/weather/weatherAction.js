import axios from 'axios';
import { WEATHER_REQUEST_SEND, WEATHER_REQUEST_SUCCESS, WEATHER_REQUEST_FAILURE } from './actionTypes';

const weatherAction = (city) => (dispatch) => {

    const cityName = city;
    const apiKey = "cb2794c666bf81899aecae0a9c1356ab";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    dispatch({ type: WEATHER_REQUEST_SEND});

    axios.get(url)
        .then(response => dispatch({type: WEATHER_REQUEST_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: WEATHER_REQUEST_FAILURE, payload: error.message}))

}

export default weatherAction;