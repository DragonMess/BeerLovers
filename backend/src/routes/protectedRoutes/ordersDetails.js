const express = require("express");

const router = express.Router();
const db = require("../../db/db");
const {
  getOrdersDetails,
  getOrdersDetailsByUserId,
  postOrdersDetails,
  deleteOrdersDetails,
  editOrdersDetails,
} = require("../../dbHelpers/dbHelpersOrdersDetails");

module.exports = (db) => {
  /* GET all OrdersDetails */
  router.get("/", (req, res) => {
    getOrdersDetails(db)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  /* GET by user id Orders */
  router.get("/:user_id", (req, res) => {
    const idObj = Number(req.params.user_id);
    getOrdersDetailsByUserId(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    // get obj with req.body

    const ordersDetailsObj = req.body;
    postOrdersDetails(ordersDetailsObj)
      // returning the ordersDetails id to the client
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/:id", (req, res) => {
    // get ordersDetailsId from params
    const idObj = Number(req.params.id);
    deleteOrdersDetails(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.put("/:id", (req, res) => {
    const ordersDetailsObj = req.body;
    // console.log(ordersDetailsObj);
    editOrdersDetails(ordersDetailsObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  return router;
};
