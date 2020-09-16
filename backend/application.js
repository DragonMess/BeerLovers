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
const nodemailer = require("nodemailer");
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
// test route
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
const XOAuth2 = require("nodemailer/lib/xoauth2");

app.use("/public", publicRoutes(db));
// private routes
app.use("/products", verifyToken, productRoutes(db));
app.use("/users", verifyToken, userRoutes(db));
app.use("/favourites", verifyToken, favouritesRoutes(db));
app.use("/breweries", verifyToken, breweriesRoutes(db));
app.use("/orders", verifyToken, ordersRoutes(db));
app.use("/ordersDetails", verifyToken, ordersDetailsRoutes(db));

// nodemailer
app.post("/api/forma", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      xoauth2: xoAuth2.createXOAuth2Generator({
        user: process.env.USER_GMAIL,
        clientId: process.env.ClientId,
        clientSecret: process.env.ClientId,
        refreshToken: process.env.RefreshToken,
        pass: process.env.PASSWORD_GMAIL,
      }),
    },
  });
  let mailOptions = {
    from: data.email,
    to: "kmylop@hotmail.com",
    subject: "Your BeerLovers order",
    html: `
  <h3>Hello Camilo</h3>
  <p></p>
  <p>Thank you for shopping with us. We’ll send a confirmation once your item has shipped. Your order details are indicated below.</p>
   <p></p>
   <h3>Order Details:</h3>
   <ul>

   </ul>

  `,
  };
  smtpTransport.sendMail(mailOptions, () => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
  });
  smtpTransport.close();
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT} !`);
});
module.exports = app;
