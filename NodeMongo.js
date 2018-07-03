var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Reactathon");
  dbo.collection("User").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.FirstName);
    db.close();
  });
});