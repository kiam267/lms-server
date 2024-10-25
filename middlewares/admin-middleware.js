const jwt = require('jsonwebtoken');

const adminMiddleware = async(req, res, next) => {
  try {
    const { authorization } = req.headers;

    const payload = jwt.verify(authorization, process.env.JWT_TOKEN);

    req.isAdmin = payload;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
