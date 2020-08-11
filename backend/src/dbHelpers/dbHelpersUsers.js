const db = require("../db/db");

const getUser = function (db) {
  return db
    .query(`SELECT * FROM Users`)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

const postUser = (userObj) => {
  //   // Asign array of values to use in queryString
  const userValues = [userObj.name, userObj.email, userObj.password];

  let queryString = `INSERT INTO users (name,email,password) 
      VALUES ($1,$2,$3) RETURNING *;`;

  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const deleteUser = (idObj) => {
  let userValues = [idObj];

  let queryString = `DELETE FROM users
      WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const editUser = (userObj) => {
  const userValues = [
    userObj.id,
    userObj.name,
    userObj.email,
    userObj.password,
  ];
  let queryString = `UPDATE users SET name = $2, email = $3,password = $4 WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
  editUser,
};
