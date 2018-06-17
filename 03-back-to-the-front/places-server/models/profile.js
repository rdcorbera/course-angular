const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
const User = require('./user');

const Profile = sequelize.define('profiles', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  rol: { type: Sequelize.STRING, allowNull: false },
  firstname: { type: Sequelize.STRING, allowNull: false },
  lastname: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  dateOfBirth: { type: Sequelize.DATE },
  biography: { type: Sequelize.STRING },
  facebookLink: { type: Sequelize.STRING },
  twitterLink: { type: Sequelize.STRING }
});

User.hasOne(Profile);

module.exports = Profile;