/** Read Environment variables */
require('./environment')

/** Express Setup */
const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'))

/** CORS Setup */
const cors = require('cors')
app.use(cors())

/** JSON Helper */
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/** Express Session */
const expressSession = require('express-session')({
    secret: 'parkeasy',
    resave: false,
    saveUninitialized: false
})
app.use(expressSession)

/** Logger Setup */
const Utility = require('./utility')
const logger = Utility.getLogger('Server')

// Change the port to 3001 if running locally
const port = process.env.PORT || 3001
app.listen(port, () => logger.info('Server started, listening on', port))

/** Passport Setup */
const passport = require('passport')

app.use(passport.initialize())
app.use(passport.session())

/** Passport Strategy */
require('./auth/auth')

/** Mongoose Setup */
require('./mongo')

/** Routes */
const userRoute = require('./routes/userRoute')
app.use('/', userRoute)

const settingItemRoute = require('./routes/settingItemRoute')
app.use('/', settingItemRoute)

const userSettingRoute = require('./routes/userSettingRoute')
app.use('/', userSettingRoute)

const authRoute = require('./routes/authRoute')
app.use('/', authRoute)

const feedbackRoute = require('./routes/feedbackRoute')
app.use('/', feedbackRoute)

app.use((err, req, res, next) => {
    Utility.getLogger('Route').error('Invalid data received')
    // Invalid json string
    if (err instanceof SyntaxError) {
        return res.status(400).json({ err: { message: "Invalid data", details: err } });
    }
    next()
})