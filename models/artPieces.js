module.exports = function(sequelize, DataTypes) {
    const genesisArt = sequelize.define("genesisArt", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
<<<<<<< HEAD
          allowNull: false,
=======
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89
          len: [1, 140]
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
<<<<<<< HEAD
          allowNull: false,
=======
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89
          isUrl: true
        }
      },
      artist: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 140]
        }
      },
      chapter: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              min: 1,
              max: 50,
<<<<<<< HEAD
              allowNull: false,
=======
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89
          }
      },
      verse: {
        type: DataTypes.INTEGER,
<<<<<<< HEAD
        validate: {
            allowNull: false,
        }
=======
        allowNull: false,
>>>>>>> 52a2154427c3d97332a0d1388f93fc2db59d4e89
    },
      matureContent: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    upvotes: {
        type: DataTypes.INTEGER,
        default: 0
    }
});
    return genesisArt;
  };