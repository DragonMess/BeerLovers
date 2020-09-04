const db = require("../db/db");

const getFavourites = function (db) {
  return db
    .query(`SELECT * FROM Favourites`)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

// product_id, user_id;
const getFavouritesByUserId = function (idObj) {
  let userValues = [idObj];
  console.log("idObjFav", userValues);
  let queryString = `SELECT * FROM Favourites WHERE user_id = $1 ;`;
  return (
    db
      .query(queryString, userValues)
      // .then((res) => res.rows)
      .then((res) => console.Log("dbFav", res.rows))

      .catch((err) => console.log(err))
  );
};

const postFavourites = (userObj) => {
  //   // Asign array of values to use in queryString
  const userValues = [userObj.product_id, userObj.user_id];

  let queryString = `INSERT INTO favourites (product_id, user_id) 
      VALUES ($1,$2) RETURNING *;`;

  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const deleteFavourites = (userObj) => {
  const userValues = [userObj.product_id, userObj.user_id];
  let queryString = `DELETE FROM favourites
      WHERE (product_id = $1 AND user_id = $2 )RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const editFavourites = (userObj) => {
  const userValues = [userObj.product_id, userObj.user_id];
  let queryString = `UPDATE favourites SET product_id = $2, user_id = $2 WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};

module.exports = {
  getFavouritesByUserId,
  postFavourites,
  deleteFavourites,
  editFavourites,
  getFavourites,
};
