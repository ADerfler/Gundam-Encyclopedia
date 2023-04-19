const express = require('express')
const router = express.Router()
const timelineController = require('../controllers/timeline')

router.get('/', homeController.getIndex)

module.exports = router