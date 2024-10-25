// Home page conteoller
const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const bcrypt = require('bcrypt');
const { errorMessage } = require("../utils/utils");






const home = async (req,res) => {
   try {
        res.status(200).send("Welcome")
   } catch (error) {
      console.log(error);
   }
}

const register = async (req, res, next) => {
   try {
      const { username, email, phone, password } = req.body;

      const userExistt = await User.findOne({ email });
      
      if (userExistt) {
         next(errorMessage(400, 'Email already exists'))
      }
      // Bycrpt password


      const userCreated = await User.create({ username, email, phone, password });

      res.status(201).json({
         msg: `work this and set it `,
         token: await userCreated.generateToken(),
         userID: userCreated._id.toString()
      })

   } catch (error) {
      next(errorMessage(404, 'Page not found'))
   }
}

const login = async (req, res, next) => {

   try {
      const { email, password } = req.body;
   
      const userExist = await User.findOne({ email })

      if (!userExist) {
         next(errorMessage(400, 'Invalid credentials'));
      }

      const user = userExist.comparePassword(password, userExist.password);
   
      if (user) {
         res.status(200).json({
            msg: "LogIn successfully",
            token: await userExist.generateToken(),
            userID: userExist._id.toString()
         });
      } else {
          next(errorMessage(401, 'Invalid Email & Password'));
      }
   } catch (error) {
       next(errorMessage(500, 'Internet server error'));
   }
}

// user form

const user = async (req, res, next) => {
   try {
   
     const userData = req.user;

      
      res.json({ msg: userData });
   } catch (error) {
      next(errorMessage(400, "message not sent "))
   }

}

module.exports={home, register, login, user}