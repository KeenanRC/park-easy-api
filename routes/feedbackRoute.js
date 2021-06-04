const express = require('express')
const router = express.Router()

// Import functions from controller
const { addFeedback } = require('../controllers/feedbackController')

// Redirect requests to handler
router.post('/feedback', addFeedback)

module.exports = router