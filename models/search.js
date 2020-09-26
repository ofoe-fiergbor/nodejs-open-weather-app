const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WeatherSchema = new Schema({
    country:{
        type: String
    }, 
    city:{
        type: String
    },
    temprature:{
        type: String
    },
    feelsLike:{
        type: String
    },
    minTemprature:{
        type: String
    },
    maxTemprature:{
        type: String
    },

})

const WeatherModel = mongoose.model('daily_search', WeatherSchema)

module.exports= WeatherModel