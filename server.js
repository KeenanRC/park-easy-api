/** Enalbe CORS */
const cors = require('cors')

/** Express Setup */
const express = require('express')
const app = express()

// Allow cross domain requests
app.use(cors())
app.use(express.static(__dirname + '/public'))

const bodyParser = require('body-parser')
const expressSession = require('express-session')({
    secret: 'parkeasy',
    resave: false,
    saveUninitialized: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSession)

// Change the port to 3001 if running locally
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server started, listening on', port))

/** Passport Setup */
const passport = require('passport')

app.use(passport.initialize())
app.use(passport.session())

/** Mongoose Setup */
const mongoConnect = require('./mongo-connect')

/** Routes */
const userRoute = require('./routes/userRoute')
app.use('/', userRoute)