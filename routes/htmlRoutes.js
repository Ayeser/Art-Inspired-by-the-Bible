db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/practicePage.html"));
      });

      app.get("/contest", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contest.html"));
      });

}