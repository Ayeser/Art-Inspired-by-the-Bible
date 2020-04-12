module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define("Employee", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 140]
        }
      },
      description: {
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
    return Employee;
  };