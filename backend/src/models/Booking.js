const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        refL: 'User'
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        refL: 'Coach'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);