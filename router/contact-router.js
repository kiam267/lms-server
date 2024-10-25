const express = require('express');
const conatctSchema = require('../validators/contact-validtion');
const contactMiddleware = require('../middlewares/contact-middleware');
const contactForm = require('../controllers/contact-controller');
const router = express.Router();



// Conatct routes
router.route('/conatct').post(contactMiddleware(conatctSchema), contactForm);

   
module.exports = router;