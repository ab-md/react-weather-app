import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import weatherAction from '../redux/weather/weatherAction';
import WeatherData from './WeatherData';

//styles
import classes from '../assets/styles/showWeather.module.css';

const ShowWeather = () => {

    const dispatch = useDispatch();
    const weather = useSelector(state => state.weatherState);

    const [cityName, setCityName] = useState("");

    const searchCity = event => {
        setCityName(event.target.value);
    }

    const showWeather = event => {
        event.preventDefault();
        dispatch(weatherAction(cityName));
    }

    return (
        <div className={classes.container}>
            <form onSubmit={showWeather}>
                <input
                className={Object.keys(weather.weatherData).length ? 
                classes.searched : classes.default}
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
                            Object.keys(weather.weatherData).length > 0 &&
                            <div className={classes.weather}>
                                <WeatherData weatherData={weather.weatherData} />
                            </div>
                }
            </div>
        </div>
    );
}

export default ShowWeather;