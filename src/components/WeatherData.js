import React from 'react';

//styles
import classes from '../assets/styles/weatherData.module.css';

const WeatherData = ({ weatherData }) => {
    return (
        <div className={classes.weatherData}>

            <div className={`${classes.cityInfo} ${classes.flexRow}`}>
                <p>
                    <span>city: </span>
                    <span>{weatherData.name}</span>
                </p>
                <p>
                    <span>country: </span>
                    <span>{weatherData.sys.country}</span>
                </p>
            </div>

            <div>
                <p>
                    <span>
                        {weatherData.weather[0].main}
                    </span>
                </p>
                {/* <p>description: {weatherData.weather[0].description}</p> */}
                <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt={weatherData.weather[0].main} />
            </div>

            <div className={`${classes.temperture} ${classes.flexRow}`}>
                <p>
                    <span>temp: </span>
                    <span>{weatherData.main.temp} cl</span>
                </p>
                <p>
                    <span>min temp: </span>
                    <span>{weatherData.main.temp_min} cl</span>
                </p>
                <p>
                    <span>max temp: </span>
                    <span>{weatherData.main.temp_max} cl</span>
                </p>
            </div>

            <div>
                <p>
                    <span>pressure: </span>
                    <span>{weatherData.main.pressure}</span>
                </p>
            </div>

            <div>
                <p>
                    <span>humidity: </span>
                    <span>{weatherData.main.humidity}%</span>
                </p>
            </div>
            <div>
                <p>
                    <span>wind speed: </span>
                    <span>{weatherData.wind.speed} km / h</span>
                </p>
            </div>

            <div className={`${classes.lonNLat} ${classes.flexRow}`}>
                <p>
                    <span>coord lon: </span>
                    <span>{weatherData.coord.lon}</span>
                </p>
                <p>
                    <span>coord lat: </span>
                    <span>{weatherData.coord.lat}</span>
                </p>
            </div>
        </div>
    );
}

export default WeatherData;