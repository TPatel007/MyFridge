var express = require('express');
var router = express.Router();
var controllerFood = require('../controllers/food');

router.get('/food', controllerFood.getFood);
router.get('/food/:id', controllerFood.getFoodById);
router.post('/food', controllerFood.postFood);
router.delete('/food/:id', controllerFood.deleteFood);
router.put('/food/:id', controllerFood.putFood);

module.exports = router;