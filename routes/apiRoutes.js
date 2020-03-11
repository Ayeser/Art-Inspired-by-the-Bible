const db = require("../models");
path = require("path");

module.exports = function(app) {
// route for all images in Artwork table
app.get("/api/artPieces", function(req, res) {
    console.log("Finding all art from Artwork table...");
    db.Artwork.findAll({}).then(function(dbArtPieces) {
      res.json(dbArtPieces)
    })
  });

// route finding ALL images from Artwork table
  app.get("/api/artPieces/:book/:chapter", function(req, res) {
    console.log("Searching for pieces of art from selected book...");
    db.Artwork.findAll({
        where: {book: req.params.book,
        chapter: req.params.chapter}
      }
      ).then(dbArtPieces => {
        res.json(dbArtPieces);
      })
    });

  // app.post("/api/artPieces", function(req, res) {
  //   db.Artwork.create(req.body).then(function(dbArtPieces) {
  //     res.json(dbArtPieces);
  //   })
  // });

  app.get("/api/scriptures", function(req, res) {
    console.log("Finding all scriptures from Scriptures table...");
    db.Scripture.findAll({}).then(function(dbScriptures) {
      res.json(dbScriptures)
    })
  });
  
  app.get("/api/scriptures/:book/:chapter", function(req, res) {
    console.log("Finding all scriptures from Scriptures table...");
    db.Scripture.findOne({ where: {
      book: req.params.book,
      chapter: req.params.chapter
    }}).then(function(dbScriptures) {
      res.json(dbScriptures)
    })
  });

  // app.post("/api/scriptures", function(req, res) {
  //   db.Scripture.create(req.body).then(function(dbScriptures) {
  //     res.json(dbScriptures);
  //   })
  // });

  app.get("/api/videos/:book/:chapter", function(req, res) {
    console.log("Finding all scriptures from selected book...");
    db.Video.findAll({ where: {
        book: req.params.book,
        chapter: req.params.chapter
    }}).then(function(dbVideos) {
      res.json(dbVideos)
    })
  });

  // app.post("/api/videos", function(req, res) {
  //   db.Video.create(req.body).then(function(dbVideos) {
  //     res.json(dbVideos);
  //   })
  // });

  app.get("/api/artistArtwork/:artist", function(req, res) {
    console.log("Finding all artwork from selected artist...");
    db.Artwork.findAll({ where: {
      artist: req.params.artist
    }}).then(function(dbVideos) {
      res.json(dbVideos)
    })
  });

  app.get("/api/artistVideos/:artist", function(req, res) {
    console.log("Finding all videos from selected artist...");
    db.Video.findAll({ where: {
      artist: req.params.artist
    }}).then(function(dbVideos) {
      res.json(dbVideos)
    })
  });

  app.post("api/contestPieces/", function(req, res) {
    db.Contest.create(req.body).then(function(dbContest) {
      res.json(dbContest)
    });
  });

  
};