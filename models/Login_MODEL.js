const mongoose = require("mongoose");

const OthuSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
    },
    percentile: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('users', OthuSchema);