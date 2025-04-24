const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips 
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment the following line to show results of querey
        // on the console 
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip lists
        return res
            .status(200)
            .json(q)
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code':req.params.tripCode}) // Return single record 
        .exec();

        // Uncomment the following line to show results of querey
        // on the console 
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip lists
        return res
            .status(200)
            .json(q)
    }
};

// Regardless of the outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    try {
        const trip = await Model
            .create({
                 code: req.body.code,
                 name: req.body.code,
                 lenght: req.body.lenght,
                 start: req.body.start,
                 perPerson: req.body.perPerson,
                 image: req.body.image,
                 description: req.body.description
            });
        return res
            .status(201)
            .json(trip);
    } catch(err) {
        return res
            .status(400)
            .json(err);
    } finally {
        // Uncomment the following  line to show results of operation 
        // on the console 
        // console.log(trip);
    }
};
// PUT: /trips/:tripCode - Adds a new Trip  
// Regardless of outcome, response must include HTML status code  
// and JSON message to the requesting client  
const tripsUpdateTrip = async(req, res) => {
    // Uncomment for debugging

     console.log(req.params);
     console.log(req.body);

    try {
     const q = await Model
       .findOneAndUpdate(
         {'code': req.params.tripCode},
         {
           code: req.body.code,
           name: req.body.name,
           length: req.body.length,
           start: req.body.start,
           resort: req.body.resort,
           perPerson: req.body.perPerson,
           image: req.body.image,
           description: req.body.description
         },
         { new: true })
        .exec();

         return res
           .status(201)
           .json(q);

       // Uncomment the following line to show results of operation
       // on the console
       // console.log(q);
    } catch(err) {
        console.log(err);
        // Database returned no data
        return res
          .status(400)
          .json(err);
    }
};


module.exports = {
    tripsList, 
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
