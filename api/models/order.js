const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ 
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' , required: true},
      quantity: { type: Number, required: true }
    }],
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' },
    totalPrice: { type: Number, required: true },
    // Additional fields like shipping details, timestamps, etc. can be added as needed
  });
  
  module.exports = mongoose.model('Order', orderSchema);