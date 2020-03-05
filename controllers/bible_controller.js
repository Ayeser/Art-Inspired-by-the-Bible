





// The following section is just to check the artpiece database
const db = require("../models/artPieces.js");

module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/genesisArt", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.genesisArt.findAll({}).then(function(dbgenesisArt) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbgenesisArt);
      });
  
    });
  
  };
  