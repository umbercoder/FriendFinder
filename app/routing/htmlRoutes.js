// Routes
// =============================================================

var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app){

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });


}
