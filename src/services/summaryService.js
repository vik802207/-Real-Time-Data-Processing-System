const WeatherSummary = require('../models/WeatherSummary');

async function calculateDailySummary(weatherData) {
    const avgTemp = weatherData.reduce((sum, record) => sum + record.temp, 0) / weatherData.length;
    const maxTemp = Math.max(...weatherData.map(record => record.temp));
    const minTemp = Math.min(...weatherData.map(record => record.temp));
    
    const conditionCounts = weatherData.reduce((counts, record) => {
        counts[record.main] = (counts[record.main] || 0) + 1;
        return counts;
    }, {});
    
    const dominantCondition = Object.keys(conditionCounts).reduce((a, b) => conditionCounts[a] > conditionCounts[b] ? a : b);
    
    return new WeatherSummary({ avgTemp, maxTemp, minTemp, dominantCondition });
}

module.exports = { calculateDailySummary };

