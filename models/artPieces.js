module.exports = function(sequelize, DataTypes) {
    const Artwork = sequelize.define("Artwork", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true
        }
      },
      artist: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 140]
        }
      },
      book: {
        type: DataTypes.STRING,
        allowNull: false,
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
          }
      },
      verse: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
      matureContent: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    upvotes: {
        type: DataTypes.INTEGER,
        default: 0
    },
    createdAt: {
      allowNull: false,
      type: sequelize.DATE,
      default: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: sequelize.DATE,
      default: DataTypes.NOW
    }
});
    return Artwork;
  };