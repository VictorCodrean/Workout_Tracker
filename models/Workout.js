const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
    },
    exercises: [
        {
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
            },
        },
    ]
})

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;