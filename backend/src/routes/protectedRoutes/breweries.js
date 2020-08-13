const express = require("express");

const router = express.Router();
const db = require("../../db/db");
const {
  getBreweries,
  getBreweriesByUserId,
  postBreweries,
  deleteBreweries,
  editBreweries,
} = require("../../dbHelpers/dbHelpersBreweries");

module.exports = (db) => {
  /* GET all Breweries */
  router.get("/", (req, res) => {
    getBreweries(db)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  /* GET by user id Breweries */
  router.get("/:user_id", (req, res) => {
    const idObj = Number(req.params.user_id);
    getBreweriesByUserId(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    // get obj with req.body

    const breweriesObj = req.body;
    postBreweries(breweriesObj)
      // returning the breweries id to the client
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/:id", (req, res) => {
    // get Breweriesid from params
    const idObj = Number(req.params.id);
    deleteBreweries(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.put("/:id", (req, res) => {
    const breweriesObj = req.body;
    // console.log(breweriesObj);
    editBreweries(breweriesObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  return router;
};
