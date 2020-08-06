const router = require("express").Router();

module.exports = function ({
  getProduct,
  postProduct,
  deleteProduct,
  editProduct,
}) {
  /* GET home page. */
  router.get("/", (req, res) => {
    getProduct()
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    // get obj with req.body
    const productObj = req.body;
    postProduct(productObj)
      // returning the todo id to the client
      .then((resDB) => {
        res.json(resDB.id);
        // console.log(resDB);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/:id", (req, res) => {
    // get todo id from params
    // should be todoId =
    const idObj = Number(req.params.id);
    deleteProduct(idObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });

  router.put("/:id", (req, res) => {
    console.log(Number(req.params.id));
    const productObj = req.body;
    // console.log(todoObj);
    editProduct(productObj)
      .then((resDB) => res.json(resDB))
      .catch((err) => console.log(err));
  });
  return router;
};
