module.exports = function(sequelize, DataTypes) {
    const Video = sequelize.define("Video", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      videoEmbed: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sourceCreator: {
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
          type: DataTypes.STRING,
          allowNull: false,
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
        type: DataTypes.STRING,
        default: "0"
    },
    createdAt: {
      type:DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    updatedAt: {
      type:DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    }
});
    return Video;
  };