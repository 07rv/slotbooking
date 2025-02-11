const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./route");
dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
