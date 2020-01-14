const Coach = require ('../models/Coach');
const User = require ('../models/User');

module.exports = {
    async index (req, res){
        const { typetrainings } = req.query;

        const coachs = await Coach.find({ typeTraining : typetrainings }); 
        
        return res.json(coachs);
    },
    async store (req,res) {
        const { filename } = req.file;
        const { name, price, typeTraining } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        if(!user){
            return res.status(400).json({ error: 'User does not exists '});
        }
        
        const coach = await Coach.create({
            user: user_id,
            thumbnail: filename,
            name,
            price,
            typeTraining: typeTraining.split(',').map(training => training.trim())
        });

        return res.json(coach);
    }
};