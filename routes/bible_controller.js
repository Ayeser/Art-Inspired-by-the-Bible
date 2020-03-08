





// The following section is just to check the artpiece database
const Artwork = require("../models/artPieces.js");
const Scriptures = require("../models/scriptures.js");
const Videos = require("../models/videos.js");
const path = require("path");

module.exports = (app, db) => {

// route for landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/practicePage.html"));
  });

// route for all images in Artwork table
  app.get("/api/Artwork", function(req, res) {
    db.Artwork.findAll({}).then(Artwork => {
      res.json(Artwork);
    });
  });

// route finding ALL images from Artwork table joined with Scriptures(?) table
  app.get("/api/Artwork/:book", function(req, res) {
    const book = req.params.book;
    db.Artwork.findAll({
        book: book
      },).then(book => {
        res.json(book);
      })
    })
  };
