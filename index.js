const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.listen(3100, () => {
  console.log("Server started");
});
