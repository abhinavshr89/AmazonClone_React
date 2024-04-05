import React, { useState, useEffect } from "react";
import './product.css';

const ProductSearch = (props) => {
    const [result, setResult] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then(data => {
                console.log(data.products); 
                setAllProducts(data.products);
                setResult(data.products);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    },[]);

    useEffect(() => {
        filterProducts(props.searchText);
    }, [props.searchText]);

    const filterProducts = (query) => {
        if (!query) {
            setResult(allProducts); 
        }

        const filtered = allProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setResult(filtered);
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log(cart);
    };

    return (
        <>
            <div>
                <h3 style={{ textAlign: 'center' }}>Amazon Products</h3>
                {result.map(({ id, title, thumbnail }) => (
                    <div key={id} className="productBox">
                        <img src={thumbnail} alt={title} />
                        <div className="product-details">
                            <h2>{title}</h2>
                            <button className="add-to-cart" onClick={() => addToCart({ id, title,thumbnail })}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="cart">
                <h3>Cart</h3>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div> */}
        </>
    );
};

export default ProductSearch;
