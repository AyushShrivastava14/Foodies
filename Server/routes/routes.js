const express = require('express');
const router = express.Router();

// Importing Controllers
// const {home, about, account, deleteAccount, updateProfile} = require('../Controllers/controller1');
const { signup } = require('../controllers/signup');
const { login } = require('../controllers/login');
const { getFeedback, addFeedback } = require('../controllers/feedback');
const { getBreakfast } = require('../controllers/breakfast');
const { getLunch } = require('../controllers/lunch');
const { getDinner } = require('../controllers/dinner');
// const {home, about, sign_up, login} = require('../Controllers/controller1');
// const {search} = require('../Controllers/search');

// Routes
// router.route('/').get(home);
// router.route('/about').get(about);
// router.route('/account').post(account);
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/addfeedback').post(addFeedback);

router.route('/getfeedback').get(getFeedback);
router.route('/getbreakfast').get(getBreakfast);
router.route('/getlunch').get(getLunch);
router.route('/getdinner').get(getDinner);
// router.route('/account/deleteAccount').post(deleteAccount);
// router.route('/account/updateProfile').post(updateProfile);
// router.route('/account/search').get(search);
// router.route('/login').get(login);

// Exporting
module.exports = router;