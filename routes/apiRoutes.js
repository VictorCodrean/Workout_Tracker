const router = require("express").Router();
const path = require("path");
const Workout = require('../models/Workout')

router.get('/workouts', async (req, res) => {
    try {
        // console.log("let's see");
        const lastWorkout = await Workout.aggregate([
            { $sort: { _id: -1 } },
            { $limit: 1 },
            {
                $addFields: {
                    totalDuration: { $sum: '$exercises.duration' }
                }
            }
        ])
        console.log(lastWorkout);
        res.json(lastWorkout)
    } catch (err) {
        console.log(err);
    }
})

router.put('/workouts/:id', async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id,
            // {
            //     _id: req.params.id
            // },
            {
                $push: { exercises: req.body }
            },
            {
                new: true
            }
        )

        res.json(workout)

    } catch (err) {
        console.log(err);
    }
})

router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create({})

        console.log(newWorkout);
        res.json(newWorkout);
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
});

router.get('/workouts/range', async (req, res) => {
    try {
        const workouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: '$exercises.duration' },
                    totalWeight: { $sum: '$exercises.weight' }
                }
            }
        ])
            .sort({ _id: -1 })
            .limit(7)
            .sort({ day: 'asc' });

        res.json(workouts)
        console.log(workouts);

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;