const CartItem = require("../models/cart-model");

// Controller function to add an item to the cart
const addItemToCart = async (req, res) => {
  try {
    const { title, image } = req.body;

    // Create a new cart item
    const newItem = await CartItem.create({
      title,
      image
    });

    // Send success response
    res.status(201).json({ message: "Item added to cart successfully", item: newItem });
  } catch (error) {
    // Send error response
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to get all items in the cart
const getAllCartItems = async (req, res) => {
  try {
    // Fetch all items from the cart
    const items = await CartItem.find();

    // Send success response with the items
    res.status(200).json(items);
  } catch (error) {
    // Send error response
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to remove an item from the cart
const removeItemFromCart = async (req, res) => {
  try {
    const itemId = req.params._id; // Correctly extract '_id' from req.params

    // Find the item in the cart and remove it by its ID
    const deletedItem = await CartItem.findOneAndDelete({ _id: itemId });

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found in the cart" });
    }

    // Send success response with the deleted item
    res.status(200).json({ message: "Item removed from cart successfully", item: deletedItem });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Export the controller functions
module.exports = { addItemToCart, getAllCartItems, removeItemFromCart };
