const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

class User extends Model {}

User.init({
  username: DataTypes.STRING,
  // ... other attributes
}, {
  sequelize,
  modelName: 'User',
  // ... other model options
});

module.exports = User;
