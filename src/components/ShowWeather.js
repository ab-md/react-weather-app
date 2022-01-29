import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import weatherAction from '../redux/weather/weatherAction';
import WeatherData from './WeatherData';

//styles
import classes from '../assets/styles/showWeather.module.css';
import loading from '../assets/images/Spinner.svg'
import { myToastyAlert } from '../services/alert';

const ShowWeather = () => {

    const dispatch = useDispatch();
    const weather = useSelector(state => state.weatherState);

    const [cityName, setCityName] = useState("");

    const searchCity = event => {
        setCityName(event.target.value);
    }

    const showWeather = event => {
        event.preventDefault();
        
        if (cityName.length) {
            dispatch(weatherAction(cityName));
        } else {
            myToastyAlert('Enter City Name', 'warning');
            return;
        }
    }

    return (
        <div className={classes.container}>
            <form onSubmit={showWeather}>
                <input
                    className={Object.keys(weather.weatherData).length ?
                        classes.searched : classes.default}
                    type='search'
                    placeholder='Enter your city'
                    value={cityName}
                    onChange={searchCity}
                />
                <button>search</button>
            </form>

            <div>
                {
                    weather.loading ?
                        <img src={loading} alt='loading' /> :
                        weather.error ?
                            <p className={classes.error}>Something went wrong!
                                <br />
                                Please try again.
                            </p> :
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