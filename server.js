const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
<<<<<<< HEAD

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// const routes = require("./controllers/bible_controller.js");
const db = require("./models");

// app.use(timeout(15000));
// app.use(haltOnTimedout);

// function haltOnTimedout (req, res, next) {
//   if (!req.timedout) next();
// }

=======
const db = require("./models/");

// app.use(routes);

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

>>>>>>> dd97d8b7c75b136b56da1526c8ece221f69244ca
// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
<<<<<<< HEAD
  })
=======
  });
>>>>>>> dd97d8b7c75b136b56da1526c8ece221f69244ca
});
