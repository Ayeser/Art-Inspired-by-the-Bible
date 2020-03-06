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
const routes = require("./controllers/bible_controller.js");
const db = require("./models/artpieces.js");
=======
// const routes = require("./controllers/bible_controller.js");
const db = require("./models");
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89

// app.use(routes);

require("./controllers/bible_controller.js")(app);


// Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
