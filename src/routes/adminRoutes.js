const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const adminController = require('../controllers/adminController');

const setNoCacheHeaders = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
};

router.get('/',setNoCacheHeaders, adminController.loginpage);
router.post('/',setNoCacheHeaders,adminController.loginAdmin)

router.get('/home',setNoCacheHeaders, adminController.adminHome);
router.get('/dashboard',setNoCacheHeaders, adminController.adminDashboard );

router.get('/adminUserEdit',setNoCacheHeaders, adminController.adminUserEdit)
router.post('/adminUserEdit',setNoCacheHeaders, adminController.adminUserUpdate);
router.get('/userDelete',setNoCacheHeaders, adminController.adminUserDeletePage)
router.post('/userDelete',setNoCacheHeaders, adminController.adminUserDelete);

router.get('/logout',adminController.logout);

module.exports = router;