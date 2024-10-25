const express = require('express');
const authController = require('../controllers/auth-controller');
const valiadte = require('../middlewares/validate-middlewares');
const signupSchema = require('../validators/auth-valiadtor');
const authMiddleare = require('../middlewares/auth-middleawre');
const router = express.Router();


router.get('/home', authController.home);
router.get('/user',authMiddleare, authController.user);
// Register routes
router.route('/signin').post(valiadte(signupSchema), authController.register)
// Login routes
router.route('/login').post(authController.login);

// Conatct routes


   
module.exports = router;