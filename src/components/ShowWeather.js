import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import weatherAction from '../redux/weather/weatherAction';

const ShowWeather = () => {

    const dispatch = useDispatch();
    const weather = useSelector(state => state.weatherState);

    const [cityName, setCityName] = useState("");
    const [subStatus, setSubStatus] = useState(false);

    const searchCity = event => {
        setCityName(event.target.value);
    }

    const showWeather = event => {
        event.preventDefault();
        dispatch(weatherAction(cityName));
        setSubStatus(true);

    }

    return (
        <div>
            <form onSubmit={showWeather}>
                <input
                    type='search'
                    placeholder='type city name'
                    value={cityName}
                    onChange={searchCity}
                />
                <button>search</button>
            </form>

            <div>
                {
                    weather.loading ?
                        <p>Loading ...</p> :
                        weather.error ?
                            <p>error</p> :
                            subStatus &&
                            <div>
                                <img
                                    src={`http://openweathermap.org/img/wn/${weather.weatherData.weather[0].icon}.png`}
                                    alt={weather.weatherData.weather[0].main} />
                                <p>city: {weather.weatherData.name}</p>
                                <p>main: {weather.weatherData.weather[0].main}</p>
                                <p>description: {weather.weatherData.weather[0].description}</p>
                                <p>temp: {weather.weatherData.main.temp}</p>
                                <p>min temp: {weather.weatherData.main.temp_min}</p>
                                <p>max temp: {weather.weatherData.main.temp_max}</p>
                                <p>pressure: {weather.weatherData.main.pressure}</p>
                                <p>humidity: {weather.weatherData.main.humidity}</p>
                                <p>coord lon: {weather.weatherData.coord.lon}</p>
                                <p>coord lat: {weather.weatherData.coord.lat}</p>
                                <p>country: {weather.weatherData.sys.country}</p>
                            </div>
                }
            </div>
        </div>
    );
}

export default ShowWeather;