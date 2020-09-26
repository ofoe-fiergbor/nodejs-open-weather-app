const request = require('request')
require('dotenv/config')


var forecast = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    qs: {q: 'accra'},
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': process.env.WEATHER_API_KEY,
      useQueryString: true
    }
  };

  const forecastController = (req, res) =>{
    request(forecast, (error, response, body) => {
        if (error) throw new Error(error);
    
        // console.log(body);
    res.json({ data: body });

    });
  }

  module.exports = {forecastController}