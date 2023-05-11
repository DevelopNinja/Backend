const mongoose = require("mongoose");

const AISchema = new mongoose.Schema({
    Rank: {
        type: Number,
        required: true
    },
    Institute: {
        type: String,
        required: true
    },
    Course_Name: {
        type: String,
        required: true
    },
    Round: {
        type: Number,
        required: true
    },
    Score: {
        type: Number,
        required: true
    },
    City: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('air',AISchema);