const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.define('users', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false }
});

module.exports = User;
