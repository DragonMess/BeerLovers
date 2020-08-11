const express = require("express");

const router = express.Router();
const db = require("../db/db");
const {
  getOrders,
  getOrdersByUserId,
  postOrders,
  deleteOrders,
  editOrders,
} = require("../dbHelpers/dbHelpersOrders");

module.exports = (db) => {
  /* GET all Orders */
  router.get("/", (req, res) => {
    getOrders(db)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  /* GET by user id Orders */
  router.get("/:user_id", (req, res) => {
    const idObj = Number(req.params.user_id);
    getOrdersByUserId(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    // get obj with req.body

    const ordersObj = req.body;
    postOrders(ordersObj)
      // returning the orders id to the client
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/:id", (req, res) => {
    // get ordersId from params
    const idObj = Number(req.params.id);
    deleteOrders(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.put("/:id", (req, res) => {
    const ordersObj = req.body;
    // console.log(ordersObj);
    editOrders(ordersObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  return router;
};
