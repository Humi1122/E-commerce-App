const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require("../controllers/products");
const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getSingleProduct);
router.patch("/products/:id", updateSingleProduct);
router.delete("/products/:id", deleteSingleProduct);

module.exports = router;
