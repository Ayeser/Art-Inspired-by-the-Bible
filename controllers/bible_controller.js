





// The following section is just to check the artpiece database
const Artwork = require("../models/artPieces.js");
const Scriptures = require("../models/scriptures.js");
const Videos = require("../models/videos.js");
const path = require("path");

module.exports = function(app) {

// route for landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/practicePage.html"));
  });

// route for all images in Artwork table
  app.get("/api/Artwork", function(req, res) {
    Artwork.findAll({}).then(function(results) {
      res.json(results);
    });
  });

// route finding ALL images from Artwork table joined with Scriptures(?) table
  app.get("/api/Artwork/:book", function(req, res) {
    Artwork.findAll({
      where: {
        book: req.params.book
      },
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });
};
