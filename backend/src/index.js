const express = require("express");
const cors = require("cors");
require("./db/database");

const app = express();

app.listen(8080, () => {
  console.log("Servidor de Pé");
});

app.use(
  cors({
    origin: "*",
  })
);
