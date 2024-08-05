const express = require('express');
const router = express.Router();

// Importing Controllers
// const {home, about, account, deleteAccount, updateProfile} = require('../Controllers/controller1');
const { signup } = require('../controllers/signup');
const { login } = require('../controllers/login');
const { getFeedbacks } = require('../controllers/feedback');
const { getbreakfast } = require('../controllers/breakfast');
const { getlunch } = require('../controllers/lunch');
const { getdinner } = require('../controllers/dinner');
// const {home, about, sign_up, login} = require('../Controllers/controller1');
// const {search} = require('../Controllers/search');

// Routes
// router.route('/').get(home);
// router.route('/about').get(about);
// router.route('/account').post(account);
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/feedback').get(getFeedbacks);
router.route('/breakfast').get(getbreakfast);
router.route('/lunch').get(getlunch);
router.route('/dinner').get(getdinner);
// router.route('/account/deleteAccount').post(deleteAccount);
// router.route('/account/updateProfile').post(updateProfile);
// router.route('/account/search').get(search);
// router.route('/login').get(login);

// Exporting
module.exports = router;