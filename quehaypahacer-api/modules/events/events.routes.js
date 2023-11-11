const express = require('express')
const router = express.Router()
const eventCtrl = require('./event.controller')
const authVerify = require('../../middlewares/authVerify')


router.post('/', authVerify, eventCtrl.create)
router.get('/', eventCtrl.getAll)
router.get('/:id', eventCtrl.getOne)

module.exports = router
