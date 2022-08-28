const Tasks = require("../model/tasks-model");

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
      attributes: ["money"],
      where: {
        positive: true
      }
    })
    const expense = await Tasks.findAll({
      attributes: ["money"],
      where: {
        positive: false
      }
    })
    
    res.send({renda: income, gasto: expense })
  } catch (error) {
    console.log(error)
  }
}