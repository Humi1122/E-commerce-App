const Product = require("../models/product");

const createProduct = async (req, res, next) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      inventory: req.body.inventory,
      imageUrl: req.body.imageUrl,
    });
    const doc = await product.save();
    console.log(doc);
    res.status(201).json({
      message: "Product Created",
      product: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const listOfAllProducts = await Product.find();
    if (listOfAllProducts.length === 0) {
      res.status(404).json({
        message: "Not Found Products",
      });
    } else {
      console.log(listOfAllProducts);
      res.status(302).json({
        message: "List Of All Products",
        product: listOfAllProducts,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    if (singleProduct) {
      console.log(singleProduct);
      res.status(302).json({
        message: "Here is Searched Product",
        product: singleProduct,
      });
    } else {
      res.status(404).json({
        message: "Not Found Product",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateSingleProduct = async (req, res, next) => {
  try {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          inventory: req.body.inventory,
          imageUrl: req.body.imageUrl,
        },
      },
      { new: true }
    );
    if (!updateProduct) {
      res.status(404).json({
        message: "Not Found Product",
      });
    } else {
      console.log(updateProduct);
      res.status(201).json({
        message: "Product Updated",
        product: updateProduct,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteSingleProduct = async (req, res, next) => {
  try {
    const deleteProduct = await Product.findOneAndDelete(req.params.id);
    if (deleteProduct) {
      console.log(deleteProduct);
      res.status(201).json({
        message: "Deleted Product",
        product: deleteProduct,
      });
    } else {
      res.status(404).json({
        message: "Not found Product",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500),
      json({
        error: err,
      });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
