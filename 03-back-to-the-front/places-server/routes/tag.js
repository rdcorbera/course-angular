const express = require('express');
const router = express.Router();
const Tag = require('../models/tag');

router.get('/', (req, res, next) => {
  Tag.findAll({ 
    order: [['name', 'ASC']]
  }).then(tags => {
    res.json(tags);
  });
});

module.exports = router;
