const express = require('express')
const router = express.Router()
const urlController = require('../controller/url.controller')

router.post('/api', urlController.returnUrl)

module.exports = router