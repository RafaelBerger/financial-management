const Tasks = require("../model/tasks-model");

exports.GetTasksData = async (_req, res) => {
  try {
    const GetData = await Tasks.findAll();
    res.send(GetData);
  } catch (error) {
    console.log(error);
  }
};
