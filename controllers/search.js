const request = require("request");
const WeatherModel = require('../models/search')
require('dotenv/config')

var search = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/find",
  qs: { type: "link%2C accurate", units: "imperial%2C metric", q: "accra" },
  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": process.env.WEATHER_API_KEY,
    useQueryString: true,
  },
};

const convertFromFhtoDegreeCelcius=(fh)=>{
  let degree = (fh-32)*5/9
  return (Math.round(degree * 100) / 100).toFixed(2)

}

const searchController = (req, res) => {
  request(search, function (error, response, body) {
    if (error) throw new Error(error);

    let weatherInfo =  JSON.parse(body)
    const weather = new WeatherModel({
        country: weatherInfo.list[0].sys.country,
        city: weatherInfo.list[0].name ,
        temprature: convertFromFhtoDegreeCelcius(weatherInfo.list[0].main.temp),
        feelsLike:convertFromFhtoDegreeCelcius(weatherInfo.list[0].main.feels_like),
        minTemprature: convertFromFhtoDegreeCelcius(weatherInfo.list[0].main.temp_min),
        maxTemprature: convertFromFhtoDegreeCelcius(weatherInfo.list[0].main.temp_max),
      });

      weather
      .save()
      .then(result=>{
        res.json({message:'Data', data: body });
      })
      .catch(err=>{
        console.log(err)
      })

      // let info = JSON.parse(body)
      // console.log(info.list[0].sys)
    });
};

module.exports = { searchController };
