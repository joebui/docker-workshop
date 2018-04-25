const sequelize = global.sequelize;
const DataTypes = require("sequelize");

let Todo = sequelize.define("todo", {
  title: DataTypes.STRING,
  content: DataTypes.TEXT
});

module.exports = Todo;
