const db = require("../db/db");
const getBreweries = function (db) {
  return db
    .query(`SELECT * FROM breweries`)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

// breweries_id, user_id;
const getBreweriesByUserId = function (idObj) {
  let userValues = [idObj];
  let queryString = `SELECT * FROM Breweries WHERE user_id = $1 ;`;
  return db
    .query(queryString, userValues)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

const postBreweries = (userObj) => {
  //   // Asign array of values to use in queryString

  const userValues = [
    userObj.trade_name,
    userObj.brewer_id,
    userObj.logo,
    userObj.coordinates_x,
    userObj.coordinates_y,
  ];
  console.log(userObj);
  let queryString = `INSERT INTO Breweries (trade_name, brewer_id,logo,coordinates_x,coordinates_y) 
      VALUES ($1,$2,$3,$4,$5) RETURNING *;`;

  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const deleteBreweries = (idObj) => {
  let userValues = [idObj];
  let queryString = `DELETE FROM Breweries
      WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const editBreweries = (userObj) => {
  const userValues = [
    userObj.id,
    userObj.trade_name,
    userObj.brewer_id,
    userObj.logo,
    userObj.coordinates_x,
    userObj.coordinates_y,
  ];
  let queryString = `UPDATE Breweries SET trade_name = $2, brewer_id = $3, logo = $4,coordinates_x =$5,coordinates_y = $6 WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};

module.exports = {
  getBreweries,
  getBreweriesByUserId,
  postBreweries,
  deleteBreweries,
  editBreweries,
};
