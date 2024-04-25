// userController.js inside controllers/ directory
const { User } = require('../models');

exports.findUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.params.username } });
    if (user) {
      res.json({ found: true });
    } else {
      res.json({ found: false });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
