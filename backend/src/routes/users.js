const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
const verifyToken = require("../helpers/authorisation");
const {
  getUserByUserEmail,
  getUser,
  postUser,
  deleteUser,
  editUser,
} = require("../dbHelpers/dbHelpersUsers");

module.exports = (db) => {
  /* GET by user id Orders */
  router.get("/:userEmail", (req, res) => {
    const UserObj = req.body;
    getUserByUserEmail(UserObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.get("/", (req, res) => {
    getUser(db)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/logout", (req, res) => {
    res.json({ token: "" });
  });

  router.post("/register", (req, res) => {
    // get obj with req.body

    const user = {
      email: req.body.email,
      password: req.body.password,
    };
  });

  router.post("/login", (req, res) => {
    // get obj with req.body
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = {
      email: req.body.email,
      // password: hashedPassword,
      password: req.body.password,
    };
    postUser(user)
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

  router.delete("/:id", (req, res) => {
    // get Userid from params
    const idObj = Number(req.params.id);
    deleteUser(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.put("/:id", (req, res) => {
    const UserObj = req.body;
    // console.log(UserOb);
    editUser(UserObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  return router;
};
