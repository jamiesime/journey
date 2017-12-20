var express = require("express");
var app = express();
var path = require("path");
var parser = require('body-parser');
var ObjectId = require("mongodb").ObjectId;
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var MongoClient = require("mongodb").MongoClient;

var db_details = require("./db_details");


// MongoClient.connect("mongodb://localhost:27017/journey", function(err, client){
MongoClient.connect("mongodb://admin:"+db_details.password+"@ds135156.mlab.com:35156/journey", function(err, client){
  if (err){
    return console.log(err);
  }
  db = client.db('journey');
  console.log("connected to db");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.get("/getlocations", function(req, res){
  db.collection("locations").find().toArray(function(err, results){
    if (err){
      return console.log(err);
    }
    res.json(results);
  });
});

app.get("/getnext/:locName/:eventIndex", function(req, res){
  db.collection("locations").find({"placename": locName, "event": eventIndex});
  res.json(results);
})
