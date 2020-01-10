const express = require('express');
const router = express.Router();
const controller = require('../public/javascripts/controller/greetingController')
router.post('/register', controller.registerController);
router.get('/find/:id', controller.findController);
router.get('/findAll', controller.findAllController);
module.exports = router;