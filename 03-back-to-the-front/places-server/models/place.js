const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Place = sequelize.define('places', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  latitude: { type: Sequelize.DECIMAL, allowNull: false },
  longitude: { type: Sequelize.DECIMAL, allowNull: false }
});

module.exports = Place;
