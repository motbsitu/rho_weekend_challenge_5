var router = require('express').Router();
var pg = require('pg');
var bodyParser = require('body-parser');

var config = {
    database: 'weekend5'
};

router.use(bodyParser.urlencoded({ extended: true }));

var pool = new pg.Pool(config);

router.post('/', function(req, res){
    console.log('FAVORITE route server post req.body', req.body);
    var imagelink = req.body.imagelink;
    var comment = req.body.comment;


    pool.connect(function(err, client, done){
        if(err){
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);
            done();
            return;
        }

        client.query('INSERT INTO favorites (imagelink, comment) VALUES ($1, $2) returning *;', [imagelink, comment],  function(err, result){
            done();
            if(err){
                console.log('Error connecting to the DB', err);
                res.sendStatus('query error', 500);
                return;
            }

        console.log('Got rows from the DB:',result.rows);
        res.send(result.rows);

        });
    });
  });

module.exports = router;
