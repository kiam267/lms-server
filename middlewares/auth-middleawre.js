const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleare = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(402).json({ meg: 'not authorized' });
  }
  const jwtToken = token.trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_TOKEN);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.id = userData._id;
    next();
  } catch (error) {}
};

module.exports = authMiddleare;
