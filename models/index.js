"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
let sequelize;

if (config.use_env_variable) {
<<<<<<< HEAD
  var sequelize = new sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
=======
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
<<<<<<< HEAD
    const model = sequelize["import"](path.join(__dirname, file));
  })
=======
    let model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
