var express = require('express');
var router = express.Router();
var controllerfood = require('../controllers/food');

router.get('/', controllerfood.homelist);

router.get('/food/delete/:id', controllerfood.deleteFood);
router.get('/create_edit', controllerfood.create);
router.get('/create_edit/:id', controllerfood.loadEditData);

router.post('/create_edit', controllerfood.create_item);
router.post('/create_edit/:id', controllerfood.putItem);


module.exports = router;




