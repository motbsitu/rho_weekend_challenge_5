const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favorites = require('./routes/favorites.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/favorites', favorites);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});






app.listen(3000);
