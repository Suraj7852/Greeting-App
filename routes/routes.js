const express = require('express');
const router = express.Router();
const controller = require('../public/javascripts/controller/greetingController')
router.post('/register', controller.registerController);
router.get('/find/:id', controller.findController);
module.exports = router;