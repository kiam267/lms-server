const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      require: true,
   },
   email: {
      type: String,
      require: true,
   },
   phone: {
      type: String,
      require: true,
   },
   password: {
      type: String,
      require: true,
   },
   isAdmin: {
      type: Boolean,
      default: false,
   }
});

// password secure
userSchema.pre('save', async function (next) {
   const user = this;

   if (!user.isModified("password")) {
      next();
      console.log('error');
   }

   try {
      const saltRound = await bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(user.password, saltRound);
      user.password = hash_password;

   } catch (error) {
    next(error);
   }
})


// password compare

userSchema.methods.comparePassword = async( password, hash_password )=> {
  return await bcrypt.compare(password, hash_password);
};

// handel JWT token

userSchema.methods.generateToken = async function () {
   try {
      return jwt.sign({
         userID: this._id.toString(),
         email: this.email,
         isAdmin: this.isAdmin,
      }, process.env.JWT_TOKEN, {
         expiresIn: "10d"
      })
   } catch (error) {
      console.log(error)
   }
}

// define the model

const User = new mongoose.model('User', userSchema);


module.exports =  User ;