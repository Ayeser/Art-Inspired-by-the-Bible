
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Import routes and give the server access to them.
<<<<<<< HEAD
<<<<<<< HEAD
const routes = require("./controllers/bible_controller.js");
const db = require("./models/artpieces.js");
=======
// const routes = require("./controllers/bible_controller.js");
const db = require("./models");
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89
=======
const db = require("./models/");
>>>>>>> d653f89a126fe83d6ac6d6fa51b3779aeaf2fea4

// app.use(routes);

// require("./routes/bible_controller.js")(app);
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Start our server so that it can begin listening to client requests.
<<<<<<< HEAD
=======
db.sequelize.sync().then(function() {
>>>>>>> d653f89a126fe83d6ac6d6fa51b3779aeaf2fea4
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
