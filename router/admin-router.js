const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin-controllers');
const adminMiddleware = require('../middlewares/admin-middleware');


router.get('/users', adminMiddleware, adminController.getAllUsers);
router.delete('/delete', adminController.deleteUser);


module.exports = router;