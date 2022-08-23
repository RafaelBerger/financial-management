require("./db/database");
const express = require("express");
const cors = require("cors");
const taskRouters = require("./router/tasksRouter");

const app = express();

app.listen(8080, () => {
  console.log("Servidor de Pé");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", taskRouters);
