const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knex = require("./db/knex");

const booksRoutes = require("./routes/booksRoutes");
const locationsRoutes = require("./routes/locationsRoutes");
const bookLocationRoutes = require("./routes/bookLocationRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/books", booksRoutes);
app.use("/locations", locationsRoutes);
app.use("/bookslocation", bookLocationRoutes);

// module.exports = {app}

app.listen(port, function() {
  console.log("listening on port: ", port);
});
