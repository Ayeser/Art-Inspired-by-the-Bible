





// The following section is just to check the artpiece database
const db = require("../models/artPieces.js");
const path = require("path");

module.exports = function(app) {

    app.get("/api/genesisArt", function(req, res) {
<<<<<<< HEAD
     db.genesisArt.findAll({}).then(function(dbgenesisArt) {
=======
      console.log(db);
      // findAll returns all entries for a table when used with no options
      db.genesisArt.findAll({}).then(function(dbgenesisArt) {
        // We have access to the todos as an argument inside of the callback function
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89
        res.json(dbgenesisArt);
      });
  
    });

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/practicePage.html"));
      // res.status(200).json("testing");
    });
  
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/"));
})

  };
  