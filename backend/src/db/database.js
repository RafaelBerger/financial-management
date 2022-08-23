const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado com o banco de dados");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
})();
