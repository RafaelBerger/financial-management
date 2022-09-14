const {
  GetAllTasksData,
  CreateTasksData,
  DeleteTasksData,
  GetMonthTasksData,
  UpdateTasksData,
} = require("../controller/tasks-controller");

const express = require("express");
const taskRouters = express.Router();

taskRouters.get("/tasks", GetAllTasksData);
taskRouters.get("/month/:id", GetMonthTasksData);

taskRouters.post("/", CreateTasksData);

taskRouters.delete("/:id", DeleteTasksData);

taskRouters.put("/:id", UpdateTasksData);

module.exports = taskRouters;
