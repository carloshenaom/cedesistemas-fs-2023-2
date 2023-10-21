const express = require('express')
const router = express.Router()
const userCtrl = require('./user.controller')


router.post('/login', userCtrl.login)
router.post('/signup', userCtrl.signup)

module.exports = router

