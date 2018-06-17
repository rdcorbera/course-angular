const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = require('./models/user');
const Profile = require('./models/profile');
const Place = require('./models/place');
const Tag = require('./models/tag');
const PlaceTag = require('./models/place-tag');
const Comment = require('./models/comment');

module.exports = {
  init: () => {
    sequelize
      .authenticate()
      .then((err) => {
        console.log('Connection has been established successfully.');

        Promise.all([
          User.sync({ force: true }),
          Profile.sync({ force: true }),
          Place.sync({ force: true }),
          Tag.sync({ force: true }),
          PlaceTag.sync({ force: true }),
          Comment.sync({ force: true }),
        ]).then(() => {
          Place.create({ 
            name: 'Shimaya', 
            description: 'Japanesse Food',
            address: 'Avenue One Two Three',
            latitude: -12.07512,
            longitude: -77.04312 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'restaurante', });
            PlaceTag.create({ placeId: place.id, name: 'ramen', });
            Comment.create({ placeId: place.id, username: 'userone', title: 'Comment 01', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
            Comment.create({ placeId: place.id, username: 'userotwo', title: 'Comment 02', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
          });
          Place.create({ 
            name: 'Katana', 
            description: 'Japanesse Food',
            address: 'Avenue One Two Three',
            latitude: -12.08012, 
            longitude: -77.05012 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'restaurante', });
            PlaceTag.create({ placeId: place.id, name: 'makis', });
            PlaceTag.create({ placeId: place.id, name: 'japonesa', });
            Comment.create({ placeId: place.id, username: 'userone', title: 'Comment 01', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
            Comment.create({ placeId: place.id, username: 'userotwo', title: 'Comment 02', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
          });
          Place.create({ 
            name: 'Tokyo Ramen', 
            description: 'Japanesse Food',
            address: 'Avenue One Two Three',
            latitude: -12.08512, 
            longitude: -77.05312 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'restaurante', });
            PlaceTag.create({ placeId: place.id, name: 'ramen', });
          });
          Place.create({ 
            name: 'Papa Jhons', 
            description: 'Pizzas',
            address: 'Avenue One Two Three',
            latitude: -12.06512, 
            longitude: -77.05222 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'restaurante', });
            PlaceTag.create({ placeId: place.id, name: 'pizza', });
            Comment.create({ placeId: place.id, username: 'userone', title: 'Comment 01', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
            Comment.create({ placeId: place.id, username: 'userotwo', title: 'Comment 02', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
          });
          Place.create({ 
            name: 'Mister Lemon', 
            description: 'Fish and seafood',
            address: 'Avenue One Two Three',
            latitude: -12.06312, 
            longitude: -77.05132 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'restaurante', });
            PlaceTag.create({ placeId: place.id, name: 'seafood', });
          });
          Place.create({ 
            name: 'Pizza Hut', 
            description: 'Pizzas and pastas',
            address: 'Avenue One Two Three',
            latitude: -12.06112, 
            longitude: -77.05042 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'restaurante', });
            PlaceTag.create({ placeId: place.id, name: 'pizza', });
            Comment.create({ placeId: place.id, username: 'userone', title: 'Comment 01', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
            Comment.create({ placeId: place.id, username: 'userotwo', title: 'Comment 02', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
          });
          Place.create({ 
            name: 'LongHorn', 
            description: 'Grill, Pasta and Drinks',
            address: 'Avenue One Two Three',
            latitude: -12.06212, 
            longitude: -77.02542 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'restaurante', });
            PlaceTag.create({ placeId: place.id, name: 'drinks', });
          });
          Place.create({ 
            name: 'Hops', 
            description: 'Bar & Disco',
            address: 'Avenue One Two Three',
            latitude: -12.06312, 
            longitude: -77.02742 
          }).then(place => {
            PlaceTag.create({ placeId: place.id, name: 'bar', });
            PlaceTag.create({ placeId: place.id, name: 'disco', });
            PlaceTag.create({ placeId: place.id, name: 'beer', });
            Comment.create({ placeId: place.id, username: 'userone', title: 'Comment 01', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
            Comment.create({ placeId: place.id, username: 'userotwo', title: 'Comment 02', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
          });
          
          Tag.create({ name: 'restaurante' });
          Tag.create({ name: 'disco' });
          Tag.create({ name: 'bar' });
          Tag.create({ name: 'beer' });
          Tag.create({ name: 'pizza' });
          Tag.create({ name: 'pasta' });
          Tag.create({ name: 'seafood' });
          Tag.create({ name: 'ramen' });

          User.create({ username: 'admin', password: 'admin' }).then(usr => Profile.create({ 
            rol: 'admin', firstname: 'admin', lastname: 'admin', email: 'admin@domain.com', userId: usr.id
          }));
          User.create({ username: 'userone', password: 'userone' }).then(usr => Profile.create({ 
            rol: 'customer', firstname: 'Jhon', lastname: 'Doe', email: 'john.doe@gmail.com', userId: usr.id
          }));
          User.create({ username: 'usertwo', password: 'usertwo' }).then(usr => Profile.create({ 
            rol: 'customer', firstname: 'Jane', lastname: 'Doe', email: 'jane.doe@gmail.com', userId: usr.id
          }));
        });
      },(err) => {
        console.log('Unable to connect to the database:', err);
      });
  }
};