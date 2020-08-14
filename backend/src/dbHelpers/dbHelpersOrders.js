const db = require("../db/db");
const getOrders = function (db) {
  return db
    .query(`SELECT * FROM orders`)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

// orders_id, user_id;
const getOrdersByUserId = function (idObj) {
  let userValues = [idObj];
  let queryString = `SELECT * FROM orders WHERE user_id = $1 ;`;
  return db
    .query(queryString, userValues)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

const postOrders = (userObj) => {
  //   // Asign array of values to use in queryString

  const userValues = [
    userObj.order_detail_id,
    userObj.buyer_id,
    userObj.order_date,
    userObj.status,
    userObj.shipped_date,
    userObj.address,
  ];
  console.log("orders", userObj);
  let queryString = `INSERT INTO orders (order_detail_id,buyer_id,order_date,status,shipped_date,address) 
      VALUES ($1,$2,$3,$4,$5) RETURNING *;`;

  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const deleteOrders = (idObj) => {
  let userValues = [idObj];
  let queryString = `DELETE FROM orders
      WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const editOrders = (userObj) => {
  const userValues = [
    userObj.id,
    userObj.order_detail_id,
    userObj.buyer_id,
    userObj.order_date,
    userObj.status,
    userObj.shipped_date,
    userObj.address,
  ];
  let queryString = `UPDATE orders SET order_detail_id = $2, buyer_id = $3, order_date = $4,status =$5 ,shipped_date=$6,address=$7 WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};

module.exports = {
  getOrders,
  getOrdersByUserId,
  postOrders,
  deleteOrders,
  editOrders,
};
