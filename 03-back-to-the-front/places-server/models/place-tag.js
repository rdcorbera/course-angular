const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Place = require('./place');

const PlaceTag = sequelize.define('place_tags', {
  name: { type: Sequelize.STRING, allowNull: false }
}, {
  timestamps: false
});

Place.hasMany(PlaceTag, { as: 'categories' });

module.exports = PlaceTag;