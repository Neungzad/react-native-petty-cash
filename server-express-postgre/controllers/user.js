var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../config').connectionString;

router.post('/', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          done(); 
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // check exist account 
        client.query("SELECT * FROM \"user\" WHERE fb_id=($1)", [req.body.fb_id], function(err, result){            
            done();  

            if (result.rows.length == 0) {
                // insert new user
                var queryText = "INSERT INTO \"user\"(name, email, create_date, fb_id) VALUES($1,$2,$3,$4) RETURNING *"; 
                client.query(queryText, [req.body.name, req.body.email, new Date(), req.body.fb_id], function (err, result) {
                    done();
                    if (err) { 
                        console.log(err); 
                    }else{
                        return res.json(result.rows[0]);
                    }                    
                });
            }else{ 
                return res.json(result.rows[0]);
            }            
        }); 
    });
});

module.exports = router