const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

const setNoCacheHeaders = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
};

router.get('/',userController.loginPage);
router.post('/',userController.userLogin);

router.get('/add_user',userController.register);
router.post('/add_user',userController.addUser);

router.get('/user_home',setNoCacheHeaders,userController.userHome)
router.get('/logout',userController.logout)

module.exports = router;