





// The following section is just to check the artpiece database
const db = require("../models/artPieces.js");
const path = require("path");

module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/genesisArt", function(req, res) {
      console.log(db);
      // findAll returns all entries for a table when used with no options
      db.genesisArt.findAll({}).then(function(dbgenesisArt) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbgenesisArt);
      });
  
    });

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/practicePage.html"));
      // res.status(200).json("testing");
    });
  
  };
  