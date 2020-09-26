const express = require('express')
const router = express.Router()

const {forecastController} = require('../controllers/forcast')


router.get('/forecast', forecastController)

module.exports = router