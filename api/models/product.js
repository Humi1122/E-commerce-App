const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true , default: true },
    price: { type: Number, required: true , default: true},
    category: { type: String, required: true, default: true },
    inventory: { type: Number, required: true , default: true},
    imageUrl: { type: String },
    // Additional fields like ratings, reviews, etc. can be added as needed
  });
  
  module.exports = mongoose.model('Product', productSchema);