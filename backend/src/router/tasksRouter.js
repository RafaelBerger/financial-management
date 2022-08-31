const {
  GetTasksData,
  GetBalanceData,
  CreateTasksData,
  DeleteTasksData,
} = require("../controller/tasks-controller");
const express = require("express");
const taskRouters = express.Router();

taskRouters.get("/tasks", GetTasksData);
taskRouters.get("/balance", GetBalanceData);
taskRouters.post("/", CreateTasksData);
taskRouters.delete("/:id", DeleteTasksData);

module.exports = taskRouters;
