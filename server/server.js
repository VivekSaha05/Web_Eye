const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
require("./config/db").dbConnect();
const cors = require("cors");
const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Server is ready"));
}

app.listen(process.env.PORT, () => {
  console.log(`server up on port ${process.env.PORT}`);
});
