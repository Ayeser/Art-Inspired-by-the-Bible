
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

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// const routes = require("./controllers/bible_controller.js");
const db = require("./models");

// app.use(timeout(15000));
// app.use(haltOnTimedout);

// function haltOnTimedout (req, res, next) {
//   if (!req.timedout) next();
// }

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
});
