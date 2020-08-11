const express = require("express");
const router = express.Router();
const db = require("../db/db");
const {
  getUser,
  postUser,
  deleteUser,
  editUser,
} = require("../dbHelpers/dbHelpersUsers");

module.exports = (db) => {
  router.get("/", (req, res) => {
    getUser(db)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    // get obj with req.body

    const UserObj = req.body;
    postUser(UserObj)
      // returning the User id to the client
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
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
