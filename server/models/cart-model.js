const mongoose = require('mongoose');

// Define the schema for the cart item
const cartItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Create the model for the cart item
const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
