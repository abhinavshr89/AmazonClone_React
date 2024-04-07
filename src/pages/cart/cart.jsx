import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import noteContext from "../../../context/noteContext";

const Cart = () => {
  const contextValues = useContext(noteContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend
    fetch("http://localhost:1000/api/v1/cart")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        return response.json();
      })
      .then((data) => {
       
        // Update cart items state with the data fetched from the backend
        setCartItems(data);
        toast.success('Message successfully sent!', { autoClose: 3000 });
        
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const removeFromCart = (itemId) => {
    // Send a request to the backend to remove the item from the cart
    fetch(`http://localhost:1000/api/v1/cart/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove item from cart");
        }
        // Optionally, update the UI state only after a successful response from the backend
        setCartItems(cartItems.filter(item => item._id !== itemId)); // Update to filter by item ID
      })
      .catch((error) => {
        // Handle errors according to your application's requirements
        console.error("Error removing item from cart:", error);
        // Optionally, display an error message to the user
      });
  };
  

  return (
    <div className="cart">
      
      <div className="cart-items">
        <h2 className="cart-heading">Shopping Cart</h2>
        {cartItems.map((item, index) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="details">
            <p>{item.title}</p>
            <button
              className="remove-from-cart"
              onClick={() => removeFromCart(item._id)} // Pass the item ID to removeFromCart
            >Remove from Cart</button>

            </div>
          </div>
        
        ))}
       
      </div>
    </div>
  );
};

export default Cart;

