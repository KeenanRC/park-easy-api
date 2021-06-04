const SettingItem = require('../models/settingItem')

exports.getSettingItems = (req, res) => {
    SettingItem.find({}, (err, records) => {
        if (err) {
            return res.json({ success: false, err: err })
        }
        return res.json({ success: true, settingItems: records })
    })
}

exports.addSettingItem = (req, res) => {
    const settingName = req.body.name
    const settingType = req.body.type
    const settingDefault = req.body.default
    SettingItem.create({ name: settingName, type: settingType, default: settingDefault }, (err, record) => {
        if (err) {
            return res.json({ success: false, err: err })
        }
        return res.json({ success: true, settingItem: record })
    })
}