const express = require('express')
const router = express.Router()
const bookingCtrl = require('./booking.controller')

router.post('/', bookingCtrl.create)

module.exports = router
