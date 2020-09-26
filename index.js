const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const weatherRouter = require('./router/weather')
const searchRouter = require('./router/search')
const forecastRouter = require('./router/forcast')
require('dotenv/config')
const app = express();


//BODY PARSER MIDDLEWARE
app.use(bodyParser.json())


//ROUTES
app.use(weatherRouter)
app.use(searchRouter)
app.use(forecastRouter)

  mongoose.connect(process.env.BD_CONNECTION,
  {useNewUrlParser:true, useUnifiedTopology: true}
   ).then(
       (result)=>{

           app.listen(3000, () => console.log("Server is up and running!!!"));
       }
       ).catch(err=> console.log(err))
