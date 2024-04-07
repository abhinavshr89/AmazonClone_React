const Product = require("../models/products-model");



// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSelectedProducts = async (req, res) => {
  try {
    const param = req.params;
    const { searchtxt } = param;

    let products = await Product.find();

    if (searchtxt) {
      products = products.filter(product =>
        product.title.toLowerCase().includes(searchtxt.toLowerCase())
      );
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = {
  getAllProducts,
  getSelectedProducts
};
