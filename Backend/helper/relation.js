const sequelize = require("../models/index").sequelize;
const { DataTypes } = require("sequelize");

const User = require("../models/user")(sequelize, DataTypes);
const Notes = require("../models/notes")(sequelize, DataTypes);

// Notes.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Notes, { foreignKey: "userId" });

module.exports = {
  User,
  Notes,
};
