const request = require("request");
require('dotenv/config')



const city = 'Accra'
var weather = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  qs: {
    callback: "test",
    id: "2172797",
    units: "%22metric%22 or %22imperial%22",
    mode: "JSON",
    q: city,
  },
  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": process.env.WEATHER_API_KEY,
    useQueryString: true,
  },
};


const weatherController = (req, res) => {
  // console.log(req)
  request(weather, function (error, response, body) {
    if (error) throw new Error(error)
    
    
    res.json({ message: weather.qs.q, data: body });
  });
};


module.exports = {
  weatherController,
};
