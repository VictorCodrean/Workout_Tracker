const router = require("express").Router();
const path = require("path");
const Workout = require('../models/Workout')



router.get('/workouts', async (req, res) => {
    try {
        // console.log("let's see");
        const lastwork = await Workout.find().sort({ _id: -1 });
        console.log(lastwork);
        res.json(lastwork)
        // res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch (err) {
        console.log(err);
    }
})

router.get('/workouts/range', (req, res) => {
    try {
        console.log("route range worked");
    } catch (err) {
        console.log(err);
    }
})

router.post('/workouts', (req, res) => {
    try {
        res.send(200)
        // res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch (err) {
        console.log(err);
    }
})


router.put('/workouts/:id', (req, res) => {
    try {
        res.send(200)
        // res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;