





// The following section is just to check the artpiece database
const db = require("../models/artPieces.js");
const path = require("path");

module.exports = function(app) {
  
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/"));
})

  };
  