module.exports = function(sequelize, DataTypes) {
    const Scripture = sequelize.define("Scripture", {
      book: {
        type: DataTypes.STRING,
        allowNull: "false",
        validate: {
          len: [1, 140]
        }
      },
      chapter: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      passage: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    return Scripture;
  };
