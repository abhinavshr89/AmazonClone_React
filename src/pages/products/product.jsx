import React, { useState, useEffect } from "react";
import "./product.css";
import { useContext } from "react";
import noteContext from "../../../context/noteContext";
import { useParams } from "react-router-dom";

const ProductSearch = () => {
  const [result, setResult] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State for current page number
  const itemsPerPage = 10; // Number of items to display per page
  const contextValues = useContext(noteContext);
  const searchParams = useParams();
  

  useEffect(() => {
    let url = "http://localhost:1000/api/v1/products";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setResult(data);
        setAllProducts(data); // Set allProducts state with fetched data
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  

  const filterProducts = (query) => {
    if (!query) {
      // Display all products if query is empty
      setResult(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResult(filtered);
    }
  };

  useEffect(() => {
    filterProducts(searchParams.searchText); // Filter products based on the search text from URL params
  }, [searchParams.searchText, allProducts]); // Update when search text or products change

  const addToCart = (product) => {
    // Make a POST request to the backend endpoint
    fetch("http://localhost:1000/api/v1/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: product.title,
        image: product.image,
        price: product.price,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add item to cart");
        }
        // If the request is successful, log a success message
        console.log("Item added to cart successfully");
        // Optionally, update contextValues.cart with the new product
        contextValues.setCart([...contextValues.cart, product]);
      })
      .catch((error) => {
        // Log any errors that occur during the request
        console.error("Error adding item to cart:", error);
      });
  };

  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="product-page">
        {currentItems.map((product, index) => (
          <div key={index} className="productBox">
            <div className="product-image-box">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h2>{product.title}</h2>
              <p className="product-price">Price: {product.price}</p>
              {/* Call addToCart with the product object */}
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {/* Pagination */}
      <div className="pagination">
        {/* Left button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {/* Page numbers */}
        {[...Array(Math.ceil(result.length / itemsPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={currentPage === number + 1 ? "active" : ""}
            >
              {number + 1}
            </button>
          )
        )}
        {/* Right button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(result.length / itemsPerPage)}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default ProductSearch;
