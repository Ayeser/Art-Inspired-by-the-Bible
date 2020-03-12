module.exports = function(sequelize, DataTypes) {
    const MemberOneLikes = sequelize.define("MemberOneLikes", {
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
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
    }
});
MemberOneLikes.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  MemberOneLikes.belongsTo(models.User, {
    foreignKey: {
      name: 'email',
      allowNull: false
    }
  });
};
    return MemberOneLikes;
  };
