const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://trainingaccesdb:k44i85mv@trainingdb-6y5fo.mongodb.net/personaltraining?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json());
app.use(routes);


app.listen(3333);
