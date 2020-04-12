
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
// const corsfix = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

// var whitelist= ['https://dreamy-rosalind-3d0ec8.netlify.com/'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// };

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// app.use(corsfix(corsOptions));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Import routes and give the server access to them.

const db = require("./models");


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
});