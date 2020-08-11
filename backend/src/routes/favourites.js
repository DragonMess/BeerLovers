const express = require("express");

const router = express.Router();
const db = require("../db/db");
const {
  getFavourites,
  postFavourites,
  deleteFavourites,
  editFavourites,
} = require("../dbHelpers/dbHelpersFavourites");

module.exports = (db) => {
  /* GET all Favourites */
  router.get("/", (req, res) => {
    getFavourites(db)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    // get obj with req.body

    const favouritesObj = req.body;
    postFavourites(favouritesObj)
      // returning the Favourites id to the client
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/:id", (req, res) => {
    // get Favouritesid from params
    const idObj = Number(req.params.id);
    deleteFavourites(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.put("/:id", (req, res) => {
    const favouritesObj = req.body;
    // console.log(favouritesObj);
    editFavourites(favouritesObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  return router;
};
