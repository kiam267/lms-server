const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/';


const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log(`connection successful to DB`);
   } catch (error) {
      console.log(`databse connecting failed`);
      process.exit(0);
   }
}


module.exports = connectDB;