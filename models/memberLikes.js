module.exports = function(sequelize, DataTypes) {
    const MemberLikes = sequelize.define("MemberLikes", {
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
      link: {
        type: DataTypes.STRING,
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
MemberLikes.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  MemberLikes.belongsTo(models.User, {
    foreignKey: {
      name: 'email',
      allowNull: false
    }
  });
};
    return MemberLikes;
  };
