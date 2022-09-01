const {
  GetAllTasksData,
  CreateTasksData,
  DeleteTasksData,
  GetMonthTasksData,
} = require("../controller/tasks-controller");
const express = require("express");
const taskRouters = express.Router();

taskRouters.get("/tasks", GetAllTasksData);
taskRouters.get("/month/:id", GetMonthTasksData);
taskRouters.post("/", CreateTasksData);
taskRouters.delete("/:id", DeleteTasksData);

module.exports = taskRouters;
