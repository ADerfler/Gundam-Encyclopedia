const express = require('express')
const router = express.Router()
const timelineController = require('../controllers/timelines')

router.get('/:id', timelineController.getTimeline)

module.exports = router