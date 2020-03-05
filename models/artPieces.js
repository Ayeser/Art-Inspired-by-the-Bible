module.exports = function(sequelize, DataTypes) {
    const genesisArt = sequelize.define("genesisArt", {
      title: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false,
          len: [1, 140]
        }
      },
      picture: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false,
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
          validate: {
              min: 1,
              max: 50,
              allowNull: false,
          }
      },
      verse: {
        type: DataTypes.INTEGER,
        validate: {
            allowNull: false,
        }
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