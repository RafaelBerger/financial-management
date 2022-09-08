const Tasks = require("../model/tasks-model");
const { Op } = require("sequelize");

exports.GetAllTasksData = async (_req, res) => {
  try {
    const GetData = await Tasks.findAll();
    res.send(GetData);
  } catch (error) {
    console.error(error);
  }
};

exports.GetMonthTasksData = async (req, res) => {
  try {
    const { id } = req.params;

    const allTasksMonth = await Tasks.findAll({
      where: {
        data_registro: id,
      },
    });

    res.status(200).send(allTasksMonth);
  } catch (error) {
    console.error(error);
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

  res.status(200).end();
};

exports.UpdateTasksData = async (req, res) => {
  const identificador = req.params.id;
  const { description, money, positive, data_registro } = req.body;

  await Tasks.update(
    {
      descriptions: description,
      money: money,
      positive: positive,
      data_registro: data_registro,
    },
    { where: { id: identificador } }
  );

  res.status(200).end();
};
