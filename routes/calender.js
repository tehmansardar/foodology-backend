const router = require('express').Router();
const auth = require('../middleware/auth');

const mealCtrl = require('../controllers/calenderCtrl');

router.get('/get_calender', auth, mealCtrl.getCalender);
router.post('/calender', auth, mealCtrl.addCalender);

module.exports = router;
