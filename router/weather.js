const express = require('express')
const router =  express.Router()
const {weatherController} = require('../controllers/weather')


router.get("/weather", weatherController);


module.exports = router