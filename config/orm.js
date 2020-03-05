const connection = require("../config/connection.js");

const orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  getGenesisPieces: function(callback) {
    const s = "SELECT * FROM genesisArt";

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

  deleteGenesisPiece: function(id, callback) {

    const s = "DELETE FROM genesisArt WHERE id=?";

    connection.query(s, [id], function(err, result) {

      callback(result);
    });

  },

  addGenesisPiece: function(piece, callback) {
    const s = "INSERT INTO genesisArt (title, picture, artist, chapter, verse, matureContent) VALUES (?,?,?,?,?,?)";
    connection.query(s, [
      piece.title, piece.picture, piece.artist, piece.chapter, piece.verse, piece.matureContent
    ], function(err, result) {
      callback(result);
    });
  },

};

module.exports = orm;
