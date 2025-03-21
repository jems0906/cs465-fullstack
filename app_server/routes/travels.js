var express = require('express');
var router = express.Router()
var controller = require('../controllers/travel');

/* GET travel pages. */
router.get('/',controller.index);
module.exports = router;