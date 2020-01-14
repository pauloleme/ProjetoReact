const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { coach_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            coach: coach_id,
            date,
        });

        //await booking.populate('coach').populate('user').execPopulate();
        
          return res.json(booking);
    }
};