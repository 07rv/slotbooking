const express = require("express");
const router = express.Router();

router.get("/v1", (req, res) => {
  res.send("Welcome to my server!");
});

module.exports = router;
