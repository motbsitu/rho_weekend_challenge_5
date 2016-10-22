var router = require('express').Router();
var pg = require('pg');

var config = {
    database: 'weekend5'
};

var pool = new pg.Pool(config);

module.exports = router;
