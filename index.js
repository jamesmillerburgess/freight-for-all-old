var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express();

var url = 'mongodb://localhost:27017/test';

var getDateTime = function() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;

};

var insertDocument = function(db, params, callback) {
    var record = {
        params: params,
        time: getDateTime()
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


