const mongoose = require('mongoose');

const CoachSchema = new mongoose.Schema({
    thumbnail: String,
    name: String,
    price: Number,
    typeTraining: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refL: 'User'
    }
});

module.exports = mongoose.model('Coach', CoachSchema);