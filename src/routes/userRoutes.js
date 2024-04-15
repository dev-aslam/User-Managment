const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/',userController.loginPage);
router.post('/',userController.userLogin);

router.get('/add_user',userController.register);
router.post('/add_user',userController.addUser);

router.get('/user_home',userController.userHome)


module.exports = router;