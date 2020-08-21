const db = require("../db/db");
const getProduct = function (db) {
  return (
    db
      .query(`SELECT * FROM products`)
      // .then((res) => console.log(res))

      .then((res) => res.rows)
      .catch((err) => console.log(err))
  );
};

const postProduct = (productObj) => {
  //   // Asign array of values to use in queryString
  const userValues = [
    productObj.product_name,
    productObj.product_type,
    productObj.unit_price,
    productObj.alcohol,
    productObj.ibu,
    productObj.ebc,
    productObj.stock_quantity,
    productObj.brewery_id,
    productObj.rate,
    productObj.img,
  ];

  let queryString = `INSERT INTO products (product_name,product_type,unit_price,alcohol,ibu,ebc,stock_quantity,brewery_id,rate,img) 
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *;`;

  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};

const deleteProduct = (idObj) => {
  let userValues = [idObj];

  let queryString = `DELETE FROM Products
      WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
const editProduct = (productObj) => {
  // console.log(productOb);
  const userValues = [
    productObj.id,
    productObj.product_name,
    productObj.product_type,
    productObj.unit_price,
    productObj.alcohol,
    productObj.ibu,
    productObj.ebc,
    productObj.stock_quantity,
    productObj.brewery_id,
    productObj.rate,
    productObj.img,
  ];
  let queryString = `UPDATE Products product_name SET product_name = $2, product_type = $3,unit_price = $4,alcohol = $5, ibu = $6, ebc = $7, stock_quantity = $8, brewery_id = $9, rate = $10, img = $11 WHERE id = $1 RETURNING *;`;
  return db.query(queryString, userValues).then((dbRes) => dbRes.rows[0]);
};
module.exports = {
  getProduct,
  postProduct,
  deleteProduct,
  editProduct,
};
