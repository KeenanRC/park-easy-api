const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String
})

// Add passport local mongoose plugin to user schema
// Which allows user schema works as an authentication method
userSchema.plugin(passportLocalMongoose)

// Declare user model which allows direct data manipulate
const User = mongoose.model('user', userSchema, 'user')

module.exports = User