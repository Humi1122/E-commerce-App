const express = require("express");
const {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateSingleOrder,
  deleteSingleOrder,
} = require("../controllers/orders");
const router = express.Router();

router.post("/orders", createOrder);
router.get("/orders", getAllOrders);
router.get("/orders/:id", getSingleOrder);
router.patch("/orders/:id", updateSingleOrder);
router.delete("/orders/:id", deleteSingleOrder);

module.exports = router;
