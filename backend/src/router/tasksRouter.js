const { GetTasksData, GetBalanceData } = require("../controller/tasks-controller");
const express = require("express");
const taskRouters = express.Router();

taskRouters.get("/tasks", GetTasksData);
taskRouters.get("/balance", GetBalanceData);

module.exports = taskRouters;
