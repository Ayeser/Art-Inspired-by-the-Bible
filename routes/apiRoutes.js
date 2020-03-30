const db = require("../models");
path = require("path");

module.exports = function (app) {
  // route for all images in Artwork table
  app.get("/api/artPieces", function (req, res) {
    console.log("Finding all art from Artwork table...");
    db.Artwork.findAll({}).then(function (dbArtPieces) {
      res.json(dbArtPieces)
    })
  });

  // app.get("/api/user_data", function(req, res) {
  //   db.User.findOne({}).then(function(dbArtPieces) {
  //     res.json(dbArtPieces)
  //   })
  // });

  // route finding ALL images from Artwork table
  app.get("/api/artPieces/:book/:chapter", function (req, res) {
    console.log("Searching for pieces of art from selected book...");
    db.Artwork.findAll({
      where: {
        book: req.params.book,
        chapter: req.params.chapter
      }
    }
    ).then(dbArtPieces => {
      res.json(dbArtPieces);
    })
  });

  app.get("/api/scriptures", function (req, res) {
    console.log("Finding all scriptures from Scriptures table...");
    db.Scripture.findAll({}).then(function (dbScriptures) {
      res.json(dbScriptures)
    })
  });

  app.get("/api/scriptures/:book/:chapter", function (req, res) {
    console.log("Finding all scriptures from Scriptures table...");
    db.Scripture.findOne({
      where: {
        book: req.params.book,
        chapter: req.params.chapter
      }
    }).then(function (dbScriptures) {
      res.json(dbScriptures)
    })
  });

  app.get("/api/videos/:book/:chapter", function (req, res) {
    console.log("Finding all scriptures from selected book...");
    db.Video.findAll({
      where: {
        book: req.params.book,
        chapter: req.params.chapter
      }
    }).then(function (dbVideos) {
      res.json(dbVideos)
    })
  });

  app.get("/api/artistArtwork/:artist", function (req, res) {
    console.log("Finding all artwork from selected artist...");
    db.Artwork.findAll({
      where: {
        artist: req.params.artist
      }
    }).then(function (dbVideos) {
      res.json(dbVideos)
    })
  });

  app.get("/api/artistVideos/:artist", function (req, res) {
    console.log("Finding all videos from selected artist...");
    db.Video.findAll({
      where: {
        artist: req.params.artist
      }
    }).then(function (dbVideos) {
      res.json(dbVideos)
    })
  });

  app.post("/api/contestPieces", function (req, res) {
    return db.Contest.create({
      title: req.body.title,
      picture: req.body.picture,
      artist: req.body.artist,
      book: req.body.book,
      chapter: req.body.chapter
    }).then(function (dbContest) {
      res.json(dbContest);
    });
  });

  app.get("/api/contestPieces", function (req, res) {
    db.Contest.findAll({}).then(function (dbContest) {
      res.json(dbContest)
    })
  });

  app.post("/api/signup", function (req, res) {
    return db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function (users) {
      if (users) {
        res.send(users);
      } else {
res.status(400).send('Error in creating new user');
      }
  });
});

app.get("/api/users", function (req, res) {
  db.User.findAll({}).then(function (dbUsers) {
    res.json(dbUsers)
  })
});

app.get("/api/login/", function (req, res) {
  if (!req.password) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id
    })
  }
});

app.put("/api/artVotes/:num/:upVotes", function (req, res) {
  db.Artwork.findOne({
    id: req.params.num
  }).then(artwork => {
    artwork.updateAttributes({
      upVotes: req.params.upVotes
    })
  })
})

};
