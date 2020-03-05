





// The following section is just to check the artpiece database
const db = require("../models/artPieces.js");
const path = require("path");

module.exports = function(app) {

    app.get("/api/genesisArt", function(req, res) {
     db.genesisArt.findAll({}).then(function(dbgenesisArt) {
        res.json(dbgenesisArt);
      });
  
    });
  
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/"));
})

  };
  