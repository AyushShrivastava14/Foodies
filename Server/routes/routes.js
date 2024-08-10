const express = require('express');
const router = express.Router();

// Importing Controllers
const { signup } = require('../controllers/signup');
const { login } = require('../controllers/login');
const { getFeedback, addFeedback, deleteFeedback } = require('../controllers/feedback');
const { getBreakfast } = require('../controllers/breakfast');
const { getLunch } = require('../controllers/lunch');
const { getDinner } = require('../controllers/dinner');
const { deleteUser } = require('../controllers/deleteuser');


// Routes

// POST routes
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/addfeedback').post(addFeedback);
router.route('/deletefeedback').post(deleteFeedback);
router.route('/deleteuser').post(deleteUser);

// GET routes
router.route('/getfeedback').get(getFeedback);
router.route('/getbreakfast').get(getBreakfast);
router.route('/getlunch').get(getLunch);
router.route('/getdinner').get(getDinner);


// Exporting
module.exports = router;