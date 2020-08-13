const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../../db/db");

const {
  getUserByUserEmail,
  postUserLogin,
  postUserRegister,
} = require("../../dbHelpers/dbHelpersUsers");

module.exports = (db) => {
  /* GET by user id Orders */
  router.get("/:userEmail", (req, res) => {
    const UserObj = req.body;
    getUserByUserEmail(UserObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/logout", (req, res) => {
    res.json({ token: "" });
  });

  router.post("/register", (req, res) => {
    // get obj with req.body

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    // returning the user id to the client
    postUserRegister(user)
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
      })
      .catch((err) => console.log(err));
  });

  router.post("/login", (req, res) => {
    // get obj with req.body
    // const password = req.body.password;
    // console.log(password);
    // // const password = "123";

    // const hashedPassword = bcrypt.hashSync(password, 10);
    // console.log(hashedPassword);
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    postUserLogin(user)
      .then((resDB) => {
        // res.json(resDB.id);
        console.log(resDB);
        if (resDB > 0) {
          // res.send("c'est ok");
          jwt.sign(user, process.env.Acces_Token_Secret, (err, token) => {
            res.json({ token: token });
            console.log(res.headers);
          });
        } else {
          res.send("nooooo !!");
          // res.json({ message: "Sorry those credentials are wrong" });
        }
      })
      .catch((err) => console.log(err));
  });

  return router;
};
