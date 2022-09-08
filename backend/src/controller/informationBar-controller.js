const Tasks = require("../model/tasks-model");
const { Op } = require("sequelize");

exports.GetBalanceData = async (_req, res) => {
  try {
    const balance = await Tasks.findAll({
      attributes: ["money", "positive", "id"],
      where: {
        [Op.or]: [{ positive: true }, { positive: false }],
      },
    });
    res.send(balance);
  } catch (error) {
    console.error(error);
  }
};
