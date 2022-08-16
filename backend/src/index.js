const express = require("express");
const cors = require("cors");

const app = express();

app.listen(8080, () => {
  console.log("Servidor de Pé");
});

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  return res.json("deu bom");
});
