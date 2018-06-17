const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000
const database = require('./database');

database.init();

const index = require('./routes/index');
const user = require('./routes/user');
const places = require('./routes/place');
const tags = require('./routes/tag');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.use('/', index);
app.use('/v1/user', user);
app.use('/v1/places', places);
app.use('/v1/tags', tags);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));