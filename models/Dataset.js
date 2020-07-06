const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema({
    changed: {
        type: Boolean,
        required: true
    },
    won: {
        type: Boolean,
        required: true
    }
});

const Dataset = module.exports = mongoose.model('Dataset', DatasetSchema, 'dataset');

// get all dataset
module.exports.getAll = (callback) => {
    Dataset.find({}).exec(callback);
}

// add to dataset
module.exports.addData = (newData, callback) => {
    newData.save(callback);
}