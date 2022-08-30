const Tasks = require("../model/tasks-model");
const {Op} = require("sequelize");

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
        [Op.or]: [
          {positive: true},
          {positive: false},
        ]
      }
    }
    )

    res.send(income)
  } catch (error) {
    console.log(error)
  }
}