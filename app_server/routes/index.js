const express = require('express'); // Express app
const router = express.Router(); // Router logic

// this is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
     .route('/trips') 
     .get(tripsController.tripsAddTrip) // Get Method routes tripList
     .post(tripsController.tripsAddTrip); // Post Method Adds a trip

// GET method routes tripsFindByCode - requires parameter
router
     .route('/trip/:tripCode')
     .get(tripsController.tripsfindByCode);

     module.exports = router;