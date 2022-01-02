const router = require('express').Router();

const mealCtrl = require('../controllers/mealCtrl');

router.post('/add_meal', mealCtrl.addMeal);

module.exports = router;
