module.exports = function (sequelize, DataTypes) {
  const Scripture = sequelize.define("Scripture", {
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
    passage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
    }
  });

  Scripture.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Scripture.belongsTo(models.Artwork, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Scripture;
};
