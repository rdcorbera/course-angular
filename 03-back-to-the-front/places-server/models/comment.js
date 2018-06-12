const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Place = require('./place');

const Comment = sequelize.define('comments', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.STRING, allowNull: false }
});

Place.hasMany(Comment, { as: 'comments' });

module.exports = Comment;