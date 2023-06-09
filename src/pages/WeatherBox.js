import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { apiKey, BASE_URL } from '../utils/apiInfo';
import { weatherBoxStyle } from '../theme/customStyles';
import { ErrorPopup, LoadingPopup, SearchBar, WeatherInfo, WelcomePopup } from '../components';


const WeatherBox = () => {

    const [cityName, setCityName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    // API URL
    const apiUrl = `${BASE_URL}/weather?q=${cityName}&appid=${"fbbfe22a1c4c83e9bc032cf172038e94"}&units=metric`;

    // Fetching the Weather Data
    const fetchWeatherData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setIsLoading(false);
            setWeatherData(data);
        } catch (error) {
            console.log(error);
        }
    };

    // Function for getting the Weather Data
    const getWeatherData = (e) => {
        e.preventDefault();
        fetchWeatherData();
        setCityName("");
    };

    return (
        <Paper sx={weatherBoxStyle}>

            <SearchBar
                cityName={cityName}
                setCityName={setCityName}
                getWeatherData={getWeatherData}
            />

            {
                isLoading ? (
                    <LoadingPopup />
                ) : (
                    weatherData?.name ? (
                        <WeatherInfo weatherData={weatherData} />
                    ) : weatherData?.cod === '404' ? (
                        <ErrorPopup weatherData={weatherData} />
                    ) : (
                        <WelcomePopup />
                    )
                )
            }

        </Paper>
    );
};

export default WeatherBox;