const Feedback = require('../models/feedback')

exports.addFeedback = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const feedback = req.body.feedback
    Feedback.create({ name: name, email: email, feedback: feedback }, (err, record) => {
        if (err) {
            return res.json({ success: false, err: err })
        }
        return res.json({ success: true, feedback: record })
    })
}