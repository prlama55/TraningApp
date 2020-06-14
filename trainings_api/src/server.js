const express = require("express");
const bodyParser = require("body-parser");
const { APP_PORT, DB_URL } = require("./config");
const { logger } = require("./middlewares");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());
app.use(logger);

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Database connection error", error);
  });

app.use(express.static(__dirname + "/assets"));
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
require("./routes")(app);

app.get("/*", (req, res) => {
  res.render("index.html");
});
app.get("/*/*", (req, res) => {
  res.status(403).send("Page not found");
});
app.listen(APP_PORT, () => {
  console.log(`App is running at http://localhost: ${APP_PORT}`);
});
