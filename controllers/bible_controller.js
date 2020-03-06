





// The following section is just to check the artpiece database
const db = require("../models/artPieces.js");
const path = require("path");

module.exports = function(app) {
<<<<<<< HEAD
  
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/"));
})

  };
  
=======

// route for landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/practicePage.html"));
    // res.status(200).json("testing");
  });

// route for all images in Artwork table
  app.get("/api/Artwork", function(req, res) {
    db.Artwork.findAll({}).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

// route finding ALL images from Artwork table joined with Scriptures(?) table
  app.get("/api/Artwork/:book", function(req, res) {
    db.Artwork.findAll({
      where: {
        book: req.params.book
      },
      // include: []
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });
};
>>>>>>> c9d4d60a38063148d80c6aac09e5e038086ab74d
