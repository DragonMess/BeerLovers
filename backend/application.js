const express = require("express");
const PORT = process.env.PORT || 3002;
const app = express();
const router = express.Router();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
require("dotenv").config();
const db = require("../backend/src/db/db.js");
db.connect();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const { verifyToken } = require("./src/helpers/authorisation");

app.get("/", (req, res) => {
  res.send("GET request to the homepage form the boss Camilo");
});
// Routing
const productRoutes = require("../backend/src/routes/products");
const userRoutes = require("../backend/src/routes/users");
const favouritesRoutes = require("../backend/src/routes/favourites");
const breweriesRoutes = require("../backend/src/routes/breweries");
const ordersRoutes = require("../backend/src/routes/orders");
const ordersDetailsRoutes = require("../backend/src/routes/ordersDetails");

app.use("/products", verifyToken, productRoutes(db));
app.use("/users", userRoutes(db));
app.use("/favourites", favouritesRoutes(db));
app.use("/breweries", breweriesRoutes(db));
app.use("/orders", ordersRoutes(db));
app.use("/ordersDetails", ordersDetailsRoutes(db));

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT} !`);
});
module.exports = app;
