const { DataTypes } = require("Sequelize");
require("dotenv").config();
const sequelize = require("../db/database");

const Tasks = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descriptions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    positive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    data_registro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "tasks" }
);

module.exports = Tasks;
