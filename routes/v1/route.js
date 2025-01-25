const express = require("express");
const apiRouterV1 = express.Router();

apiRouterV1.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

module.exports = apiRouterV1;
