var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var url;

if (env === 'development') {
    url = 'mongodb://localhost:27017/test';
} else {
    url = 'mongodb://jburgess:Cdjuices1@ds057254.mongolab.com:57254/heroku_3zthx5rr';
}

var insertDocument = function(db, params, callback) {
    var record = {
        date: new Date()
    };
    console.log(record);
    db.collection('usage').insertOne(record, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the usage collection.");
        callback(result);
    });
};

app.set('port', (process.env.PORT || 5000));

app.all('/', function(req, res, next) {
    console.log(req.params);
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        insertDocument(db, req.params, function() {
            db.close();
            console.log('Closing mongod connection');
            next();
        });
    });
});

app.use('/', express.static('./views/pages'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


