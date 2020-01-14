const Coach = require('../models/Coach');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const coachs = await Coach.find({ user: user_id});
        return res.json (coachs);
    }
}