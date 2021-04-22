const express = require('express')
const router = express.Router()

// Import functions from controller
const { login, register } = require('../controllers/userController')

// Redirect requests to handler
router.post('/login', login)
router.post('/register', register)

module.exports = router