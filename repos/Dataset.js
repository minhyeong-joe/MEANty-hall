const express = require('express');
const router = express.Router();
const Dataset = require('../models/Dataset');

// @desc    fetch and return all dataset items
// @route   GET /
router.get('/', (req, res) => {
    Dataset.getAll((err, data) => {
        if (err) throw err;
        res.json({success: true, data: data});
    });
});

// @desc    add a new data to dataset
// @route   POST /
router.post('/', (req, res) => {
    const { changed, won } = req.body;

    const newData = new Dataset({
        changed: changed,
        won: won
    });

    Dataset.addData(newData, (err, data) => {
        if (err) throw err;
        res.json({ success: true, newData: data});
    });
});

module.exports = router;