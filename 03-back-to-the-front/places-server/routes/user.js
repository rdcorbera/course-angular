const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Profile = require('../models/profile');

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    where: {
      username: username,
      password: password
    }
  }).then(user => {
    if (user) {
      Profile.findOne({ where: { userId: user.id }}).then(profile => res.json(profile));
    } else {
      res.status(404).send('User not found');
    }
  });
});

module.exports = router;