const express = require("express");
const app = express();

// var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
require("dotenv").config();
const db = require("../backend/src/db/db.js");
db.connect();
// const dbHelpers = require("./helpers/dbHelpers.js")(db);

// const todosRouter = require("../backend/routes/todos");
const { token } = require("morgan");

// const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const products = require("./src/routes/products");
// const breweries = require("./src/routes/breweries");
// const orders_details = require("./src/routes/orders_details");
// const orders = require("./src/routes/orders");

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(3002);
module.exports = app;
