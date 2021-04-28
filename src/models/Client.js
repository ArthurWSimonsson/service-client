const mongoose = require('mongoose')

// Client schema
const clientSchema = new mongoose.Schema({
    clientNr: {
        type: Number,
        required: true,
        unique: true
    },
    clientUUID: {
        type: String,
        required: true,
        unique: true
    },
    clientName: String
})

module.exports = mongoose.model('Client', clientSchema)