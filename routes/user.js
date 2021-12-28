const router = require('express').Router();

const userCtrl = require('../controllers/userCtrl');

router.post('/signup-username-email', userCtrl.signupUsernameEmail);

router.post('/signup', userCtrl.signup);

router.post('/signin', userCtrl.signin);

module.exports = router;
