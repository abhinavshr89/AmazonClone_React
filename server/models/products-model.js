const mongoose = require('mongoose');

// Define schema for products
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  }
});


const Product = mongoose.model('Ecomproduct', productSchema);

module.exports = Product;
