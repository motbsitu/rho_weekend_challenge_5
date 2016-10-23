const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favorites = require('./routes/favorites.js');
var pg = require('pg');
var config = {
    database: 'weekend5'
};

var pool = new pg.Pool(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/favorites', favorites);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/*', function(req, res){
  res.redirect('/');
});




app.listen(3000);
