const express = require("express");
const app = express();
require("dotenv").config();
const { dbConnect } = require("./config/db");
const cors = require("cors");
const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`server up on port ${process.env.PORT}`);
  dbConnect();
});
