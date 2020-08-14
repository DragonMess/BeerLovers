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
    res.json({ message: "404" });
  });

  router.post("/register", (req, res) => {
    // get obj with req.body

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    // returning the user id to the client
    getUserByUserEmail(user.email)
      .then((resDB) => {
        // res.json(resDB.id);
        if (resDB.length > 0) {
          // res.send("c'est ok");
          res.json({ message: "404" });
        } else {
          postUserRegister(user)
            .then((resD) => {
              // res.json(resDB.id);
              jwt.sign(user, process.env.Acces_Token_Secret, (err, token) => {
                res.json({ message: "200", token: token, id: resD[0].id });
              });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  });

  router.post("/login", (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    postUserLogin(user)
      .then((resDB) => {
        // res.json(resDB.id);
        if (resDB.length > 0) {
          // res.send("c'est ok");
          jwt.sign(user, process.env.Acces_Token_Secret, (err, token) => {
            res.json({ token: token, id: resDB[0].id });
          });
        } else {
          res.json({ message: "404" });
        }
      })
      .catch((err) => console.log(err));
  });

  return router;
};
