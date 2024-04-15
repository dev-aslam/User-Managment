const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/',adminController.loginpage);
router.post('/',adminController.loginAdmin)

module.exports = router;