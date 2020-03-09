

const path = require("path");
db = require("../models");

module.exports = (app, db) => {

// route for landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/practicePage.html"));
  });

// route for all images in Artwork table
  app.get("/api/artPieces", function(req, res) {
    console.log("Finding all art from selected book...");
    db.Artwork.findAll({}).then(function(dbArtPieces) {
      res.json(dbArtPieces)
    })
  });

// route finding ALL images from Artwork table joined with Scriptures(?) table
  app.get("/api/artPieces/:book", function(req, res) {
    console.log("Searching for pieces of art from selected book...");
    db.Artwork.findAll({
      where: {
        book: req.params.book
      }
      },).then(dbArtPieces => {
        res.json(dbArtPieces);
      })
    });

  app.post("/api/artPieces", function(req, res) {
    db.Artwork.create(req.body).then(function(dbArtPieces) {
      res.json(dbArtPieces);
    })
  });

  app.get("/api/scriptures", function(req, res) {
    console.log("Finding all scriptures from selected book...");
    db.Scripture.findAll({}).then(function(dbScriptures) {
      res.json(dbScriptures)
    })
  });

  app.post("/api/scriptures", function(req, res) {
    db.Scripture.create(req.body).then(function(dbScriptures) {
      res.json(dbScriptures);
    })
  });

  app.get("/api/videos", function(req, res) {
    console.log("Finding all scriptures from selected book...");
    db.Video.findAll({}).then(function(dbVideos) {
      res.json(dbVideos)
    })
  });

  app.post("/api/videos", function(req, res) {
    db.Video.create(req.body).then(function(dbVideos) {
      res.json(dbVideos);
    })
  });

  };
