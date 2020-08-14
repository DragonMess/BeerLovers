const db = require("../db/db");
const getOrdersDetails = function (db) {
  return db
    .query(`SELECT * FROM orders_details`)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

// orders_id, user_id;
const getOrdersDetailsByUserId = function (idObj) {
  let userValues = [idObj];
  let queryString = `SELECT * FROM orders_details WHERE user_id = $1 ;`;
  return db
    .query(queryString, userValues)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

const postOrdersDetails = (userObj) => {
  //   // Asign array of values to use in queryString

  const userValues = [
    userObj.product_id,
    userObj.order_id,
    userObj.order_id,
    userObj.unit_price,
  ];
  console.log("orderdetail", userObj);
  let queryString = `INSERT INTO orders_details (product_id, order_id,order_id,unit_price) 
      VALUES ($1,$2,$3,$4,$5) RETURNING *;`;

  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const deleteOrdersDetails = (idObj) => {
  let userValues = [idObj];
  let queryString = `DELETE FROM orders_details
      WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const editOrdersDetails = (userObj) => {
  const userValues = [
    userObj.id,
    userObj.product_id,
    userObj.order_id,
    userObj.quantity,
    userObj.unit_price,
  ];
  let queryString = `UPDATE orders_details SET product_id = $2, order_id = $3, order_id = $4,unit_price =$5 WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};

module.exports = {
  getOrdersDetails,
  getOrdersDetailsByUserId,
  postOrdersDetails,
  deleteOrdersDetails,
  editOrdersDetails,
};
