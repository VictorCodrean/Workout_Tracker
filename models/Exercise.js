const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
    },
    reps: {
        type: String,
    },
    sets: {
        type: String,
    },
    distance: {
        type: String,
    }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;