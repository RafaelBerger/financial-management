const Tasks = require("../model/tasks-model");

exports.GetTasksData = async (_req, res) => {
  const GetData = await Tasks.findAll();
  res.send(GetData);
};
