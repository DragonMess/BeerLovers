const express = require("express");

// product_id, user_id;
const router = express.Router();
const db = require("../../db/db");
const {
  getProduct,
  postProduct,
  deleteProduct,
  editProduct,
} = require("../../dbHelpers/dbHelpersProducts");

module.exports = (db) => {
  /* GET all products */
  router.get("/", (req, res) => {
    getProduct(db)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    // get obj with req.body

    const productObj = req.body;
    postProduct(productObj)
      // returning the product id to the client
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/:id", (req, res) => {
    // get productid from params
    const idObj = Number(req.params.id);
    deleteProduct(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.put("/:id", (req, res) => {
    const productObj = req.body;
    // console.log(productOb);
    editProduct(productObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  return router;
};
