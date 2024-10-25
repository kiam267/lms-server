const { errorMessage } = require("../utils/utils");


const valiadte = (schema) => async (req, res, next) => {
  try {
      await schema.parseAsync(req.body);
     next();
  } catch (err) {
     next(errorMessage(400, err));
  } 
}

module.exports = valiadte;