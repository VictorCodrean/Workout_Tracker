const router = require("express").Router();
// const router = express.Router();
const path = require("path");

router.get('/stats', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/exercise', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;