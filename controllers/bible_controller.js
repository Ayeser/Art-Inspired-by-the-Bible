





// The following section is just to check the artpiece database
const db = require("../models/artPieces.js");
const path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/practicePage.html"));
    // res.status(200).json("testing");
  });

  app.get("/api/Artwork", function(req, res) {
    db.Artwork.findAll({}).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  app.get("/api/Artwork/:book", function(req, res) {
    db.Artwork.findBook({
      where: {
        id: req.params.book
      },
      // include: []
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });
};
