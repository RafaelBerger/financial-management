const Tasks = require("../model/tasks-model");
const { Op } = require("sequelize");

exports.GetTasksData = async (_req, res) => {
  try {
    const GetData = await Tasks.findAll();
    res.send(GetData);
  } catch (error) {
    console.log(error);
  }
};

exports.GetBalanceData = async (_req, res) => {
  try {
    const income = await Tasks.findAll({
      attributes: ["money", "positive", "id"],
      where: {
        [Op.or]: [{ positive: true }, { positive: false }],
      },
    });

    res.send(income);
  } catch (error) {
    console.log(error);
  }
};

exports.CreateTasksData = async (req, res) => {
  const { id, descriptions, money, positive, data_registro } = req.body;

  await Tasks.create({ id, descriptions, money, positive, data_registro });

  res.send({ saved: true });
};

exports.DeleteTasksData = async (req, res) => {
  const identificador = req.params.id;

  await Tasks.destroy({
    where: {
      id: identificador,
    },
  });

  res.status(204).end();
};
