const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Place = require('../models/place');
const PlaceTag = require('../models/place-tag');
const Comment = require('../models/comment');

router.get('/', (req, res, next) => {
  Place.findAll({
    include: [{
      model: PlaceTag,
      as: 'categories',
      attributes: ['name']
    }],
    order: [['name', 'ASC']]
  }).then(places => {
    res.json(places);
  });
});

router.get('/:id/details', (req, res, next) => {
  const placeId = req.params.id;

  Place.findOne({
    include: [{
      model: PlaceTag,
      as: 'categories',
      attributes: ['name']
    }, {
      model: Comment,
      as: 'comments'
    }],
    where: {
      id: placeId
    }
  }).then(places => {
    res.json(places);
  });
});

router.get('/search', (req, res, next) => {
  const category = req.query.category;

  Place.findAll({
    include: [{
      model: PlaceTag,
      as: 'categories',
      attributes: ['name']
    }],
    where: {
      '$categories.name$': {
        [Op.like]: '%' + category + '%'
      }
    },
    order: [['name', 'ASC']]
  }).then(places => {
    res.json(places);
  });
});

router.get('/popular-day', (req, res, next) => {
  Place.findAll({
    limit: 3,
    include: [{
      model: PlaceTag,
      as: 'categories',
      attributes: ['name']
    }],
    order: [['name', 'ASC']]
  }).then(places => {
    res.json(places);
  });
});

router.get('/popular-week', (req, res, next) => {
  Place.findAll({
    limit: 3,
    include: [{
      model: PlaceTag,
      as: 'categories',
      attributes: ['name']
    }],
    order: [['name', 'DESC']]
  }).then(places => {
    res.json(places);
  });
});

module.exports = router;