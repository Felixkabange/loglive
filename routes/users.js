const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Your Sequelize models

// Assuming you have a userController set up
const userController = require('../controllers/userController');

router.get('/:username', userController.findUserByUsername);

router.post('/register', async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.create({ username });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
