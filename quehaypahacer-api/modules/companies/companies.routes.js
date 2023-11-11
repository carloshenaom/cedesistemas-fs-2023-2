const express = require('express')
const router = express.Router()
const companyCtrl = require('./company.controller')


router.post('/create', companyCtrl.create)

module.exports = router
