const { fetchWeatherData } = require('./src/services/weatherService');
const { calculateDailySummary } = require('./src/services/summaryService');
const config = require('./config/config.json');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

setInterval(async () => {
    const weatherData = await Promise.all(config.metros.map(fetchWeatherData));
    const dailySummary = await calculateDailySummary(weatherData);
    console.log(dailySummary);
}, config.interval);
