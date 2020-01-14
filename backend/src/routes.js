const express = require ('express');
const multer = require ('multer');
const uploadConfig = require ('./config/upload');

const SessionController = require('./controllers/SessionController');
const CoachController = require('./controllers/CoachController');
const ProfileController = require('./controllers/ProfileController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/coachs', CoachController.index);
routes.post('/coachs', upload.single('thumbnail'), CoachController.store);

routes.get('/profiles', ProfileController.show);

routes.post('/coachs/:coach_id/bookings', BookingController.store);
module.exports = routes;