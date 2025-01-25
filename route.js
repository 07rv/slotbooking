const express = require("express");
const apiRouterV1 = require("./routes/v1/route");
const router = express.Router();

router.use("/v1", apiRouterV1);

module.exports = router;
