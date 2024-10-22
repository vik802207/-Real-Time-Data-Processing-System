const axios = require('axios');
require('dotenv').config();
const { convertKelvinToCelsius } = require('../utils/temperatureConverter');
const config = require('../../config/config.json');

async function fetchWeatherData(city) {
    try {
        const apiKey = process.env.API_KEY;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const { main, dt } = response.data;
        return {
            main: main.weather[0].main,
            temp: convertKelvinToCelsius(main.temp),
            feels_like: convertKelvinToCelsius(main.feels_like),
            dt
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

module.exports = { fetchWeatherData };

