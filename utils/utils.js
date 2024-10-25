const errorMessage = (status, message) => {
   const error = {
      status,
      message
   }
   return error;
}

module.exports = { errorMessage };