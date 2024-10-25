const User = require('../models/user-model');

const getAllUsers = async (req, res, next) => {
  try {
    const isAdmin = req.isAdmin;

    const users = await User.findOne({ email: isAdmin.email }).select({
      password: 0,
    });
    if (!users.isAdmin) {
       const users = await User.find({ email: isAdmin.email }).select({
         password: 0,
       });
      return res.status(200).json({ users });
    } else {
      const users = await User.find().select({
        password: 0,
      });
      if (!users || users.length === 0) {
        return res.status(404).json({ msg: 'No users found' });
      }
      return res.status(200).json({ users });
    }
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.query;
   await User.deleteOne({_id : id});
  res.status(200).json({msg : 'success deleted'});
}
module.exports = { getAllUsers, deleteUser };
