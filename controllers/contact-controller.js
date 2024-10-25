// Home page conteoller

const Contact = require("../models/contact-model");
const { errorMessage } = require("../utils/utils");



// Conatct Fomrm

const contactForm = async (req, res, next) => {
   try {
      const { username, email, message } = req.body;
      const userContact = await Contact.create({ username, email, message });
      res.send("contact Create  success")
   } catch (error) {
      next(errorMessage(400, "message not sent "))
   }

}

module.exports = contactForm;