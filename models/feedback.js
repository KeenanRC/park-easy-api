const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    name: String,
    email: String,
    feedback: { type: String, required: true }
}, {
    collection: 'feedback'
})

const Feedback = mongoose.model('feedback', feedbackSchema)

module.exports = Feedback