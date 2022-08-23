const { Sequelize, DataTypes } = require("Sequelize");
const sequelize = new Sequelize();

module.exports = () => {
  const Tasks = sequelize.define("Tasks", {
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
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
