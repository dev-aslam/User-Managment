const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/admin',adminController.loginpage);

router.get('/admin-register',adminController.register);

module.exports = router;