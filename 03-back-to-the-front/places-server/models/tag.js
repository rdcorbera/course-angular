const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Tag = sequelize.define('tags', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Tag;
