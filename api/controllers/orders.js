const Order = require("../models/order");

const createOrder = async (req, res, next) => {
  try {
    const orderProduct = new Order(req.body);
    const doc = await orderProduct.save();
    console.log(doc);
    res.status(201).json({
      message: "Order Craeted",
      order: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const allOrdersList = await Order.find();
    if (allOrdersList.length === 0) {
      res.status(404).json({
        message: "Not Found Orders",
      });
    } else {
      console.log(allOrdersList);
      res.status(302).json({
        message: "List of All OrderProducts",
        orderProduct: allOrdersList,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getSingleOrder = async (req, res, next) => {
  try {
    const getOrderProduct = await Order.findById(req.params.id);
    if (getOrderProduct) {
      console.log(getOrderProduct);
      res.status(302).json({
        message: "Here Is the Searched OrderProduct",
        orderProduct: getOrderProduct,
      });
    } else {
      res.status(404).json({
        message: "Not Found OrderProduct",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateSingleOrder = async (req, res, next) => {
  try {
    const updateOrderProduct = await Order.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (updateOrderProduct) {
      console.log(updateOrderProduct);
      res.status(201).json({
        message: "OrderProduct Updated Successfully",
        orderProduct: updateOrderProduct,
      });
    } else {
      res.status(404).json({
        message: "Not Found OrderProduct",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteSingleOrder = async (req, res, next) => {
  try {
    const deleteOrderProduct = await Order.findOneAndDelete(req.params.id);
    if (deleteOrderProduct) {
      res.status(201).json({
        message: "OderProduct Deleted",
        orderProduct: deleteOrderProduct,
      });
    } else {
      res.status(404).json({
        message: "Not Found OderProduct",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateSingleOrder,
  deleteSingleOrder,
};
