var router = require('express').Router();
var pg = require('pg');

var config = {
    database: 'weekend5'
};

var pool = new pg.Pool(config);

router.post('/', function(req, res){
    console.log('req.body home route server post', req.body);
    var imagelink = req.body.imagelink;
    var comment = req.body.comment;

    console.log('image link in server post', imagelink);

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
