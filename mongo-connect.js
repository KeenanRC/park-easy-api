/** Mongoose Setup */
const mongoose = require('mongoose')
const passport = require('passport')

let db_url
// Read db connection string
if (!process.env.DB_CONNECTION_STRING) {
    // If db connection string not found in process.env
    try {
        // Read db connection string from configuration file
        const { DB_CONNECTION_STRING } = require('./EVs')
        db_url = DB_CONNECTION_STRING
    } catch (e) {
        console.log('Error: enviornment variable "DB_CONNECTION_STRING" not found.')
        process.exit(0)
    }
}
else {
    // Use string specified in process.env
    db_url = process.env.DB_CONNECTION_STRING
}

// Connect to database
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    // Error occurs
    if (err) {
        console.log('Error: database cannot be accessed.')
        process.exit(0)
    }
})

const User = require('./models/user')

/** Passport Local Authentication */

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = mongoose.connection