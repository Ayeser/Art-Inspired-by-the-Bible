// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genesisAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    exodusAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    leviticusAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    numbersAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    deuteronomyAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    joshuaAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    judgesAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    ruthAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstSamuel, Achievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondSamuelAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstKingsAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondKingsAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstChroniclesAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondChroniclesAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    ezraAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    nehemiahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    estherAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    jobAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    psalmsAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    proverbsAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    ecclesiastesAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    songOfSolomonAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    isaiahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    jeremiahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    lamentationsAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    ezekielAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    danielAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    hoseaAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    joelAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    amosAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    obadiahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    jonahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    micahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    nahumAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    habakkukAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    zephaniahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    haggaiAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    zechariahAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    malachiAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    matthewAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    markAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    lukeAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    johnAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    actsAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    romansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstCorinthiansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondCorinthiansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    galatiansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    ephesiansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    philippiansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    colossiansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstThessaloniansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondThessaloniansAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstTimothyAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondTimothyAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    titusAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    philemonAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    hebrewsAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    jamesAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstPeterAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondPeterAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    firstJohnAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    secondJohnAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    thirdJohnAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    judeAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    revelationAchievement: {
        type: DataTypes.BOOLEAN,
        default: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
