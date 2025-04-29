const express = require('express'); // Express app
const router = express.Router(); // Router logic

// This is where we import the controllers we will route 
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
router
     .route('/login')
     .post(authController.login);

router
     .route('/register')
     .post(authController.register);
     
// define route for our trips endpoint
router
     .route('/trips')
     .get(tripsController.tripsList) // GET Method routes tripList
     .post(tripsController.tripsAddTrip); // Post Method Adds a Trip

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - rquires parameter
router
     .route('/trips/:tripCode')
     .get(tripsController.tripsFindByCode)
     .put(tripsController.tripsUpdateTrip);
     
module.exports = router;