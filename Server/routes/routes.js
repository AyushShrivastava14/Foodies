const express = require('express');
const router = express.Router();

// Importing Controllers
// const {home, about, account, deleteAccount, updateProfile} = require('../Controllers/controller1');
const { signup } = require('../controllers/signup');
// const {home, about, sign_up, login} = require('../Controllers/controller1');
// const {search} = require('../Controllers/search');

// Routes
// router.route('/').get(home);
// router.route('/about').get(about);
// router.route('/account').post(account);
router.route('/signup').post(signup);
// router.route('/account/deleteAccount').post(deleteAccount);
// router.route('/account/updateProfile').post(updateProfile);
// router.route('/account/search').get(search);
// router.route('/login').get(login);

// Exporting
module.exports = router;