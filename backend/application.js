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

// app.get("/products", function (req, res) {
//   res.send("Hello World");
// });
// Routing
const publicRoutes = require("./src/routes/publicRoutes/public");

const productRoutes = require("./src/routes/protectedRoutes/products");

const userRoutes = require("./src/routes/protectedRoutes/users");
const favouritesRoutes = require("./src/routes/protectedRoutes/favourites");
const breweriesRoutes = require("./src/routes/protectedRoutes/breweries");
const ordersRoutes = require("./src/routes/protectedRoutes/orders");
const ordersDetailsRoutes = require("./src/routes/protectedRoutes/ordersDetails");

app.use("/public", publicRoutes(db));

app.use("/products", verifyToken, productRoutes(db));
app.use("/users", verifyToken, userRoutes(db));
app.use("/favourites", verifyToken, favouritesRoutes(db));
app.use("/breweries", verifyToken, breweriesRoutes(db));
app.use("/orders", verifyToken, ordersRoutes(db));
app.use("/ordersDetails", verifyToken, ordersDetailsRoutes(db));

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT} !`);
});
module.exports = app;
