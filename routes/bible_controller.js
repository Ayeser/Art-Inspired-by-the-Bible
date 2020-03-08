

const path = require("path");

module.exports = (app, db) => {

// route for landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/practicePage.html"));
  });

// route for all images in Artwork table
  app.get("/api/Artwork", function(req, res) {
    console.log("Finding all art from selected book...");
    db.Artworks.findAll({}).then(Artwork => {
      res.json(Artwork);
    });
  });

// route finding ALL images from Artwork table joined with Scriptures(?) table
  app.get("/api/Artwork/:book", function(req, res) {
    console.log("Searching for pieces of art from selected book...");
    db.Artworks.findAll({
        book: req.params.book
      },).then(response => {
        res.json(response);
      })
    })
  };
