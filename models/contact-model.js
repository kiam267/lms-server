const mongoose = require('mongoose');

const conatctSchema = new mongoose.Schema({
   username: {
      type: String,
      require: true,
   },
   email: {
      type: String,
      require: true,
   },
   message: {
      type: String,
      require: true,
   },

});



const Contact = new mongoose.model( 'Contact', conatctSchema );


module.exports = Contact;