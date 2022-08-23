const { GetTasksData } = require("../controller/tasks-controller");
const express = require("express");
const taskRouters = express.Router();

taskRouters.get("/tasks", GetTasksData);

module.exports = taskRouters;
