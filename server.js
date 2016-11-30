var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('resume', ['resume']);
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get('/education', function(req, res) {
  console.log("I received a GET request");

  db.resume.find({type:'edu'}, function(err, docs){
    console.log(docs);
    res.json(docs);

  });

});

app.get('/skills', function(req, res) {
  console.log("I received a GET request");

  db.resume.find({type:'skill'}, function(err, docs){
    console.log(docs);
    res.json(docs);

  });

});

app.get('/projects', function(req, res) {
  console.log("I received a GET request");

  db.resume.find({type:'project'}, function(err, docs){
    console.log(docs);
    res.json(docs);

  });

});

// app.post("/resume", function(req, res){
//   console.log(req.body);
//   db.contactlist.insert(req.body, function(err, docs){
//     res.json(docs);
//   });
// });


// app.get('/resume/:id', function(req, res){
//   var id = req.params.id;
//   console.log(id);
//   db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, docs){
//     res.json(docs);
//   });
// });


app.listen(8080);
console.log("Server running on port 8080");
