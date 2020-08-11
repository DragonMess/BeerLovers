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

// const breweries = require("./src/routes/breweries");
// const orders_details = require("./src/routes/orders_details");
// const orders = require("./src/routes/orders");

app.get("/", (req, res) => {
  res.send("GET request to the homepage form the boss Camilo");
});
const productRoutes = require("../backend/src/routes/products");
const userRoutes = require("../backend/src/routes/users");
const favouritesRoutes = require("../backend/src/routes/favourites");
app.use("/products", productRoutes(db));
app.use("/users", userRoutes(db));
app.use("/favourites", favouritesRoutes(db));
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT} !`);
});
module.exports = app;
