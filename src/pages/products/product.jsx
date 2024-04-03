import React, { useState } from "react";
import { useEffect } from "react";
import './product.css'
const productsData = [
    {
        id: 1,
        title: 'Apple iPhone 13 (128GB) - Midnight (Mobile)',
    },
    {
        id: 2,
        title: 'Xiaomi 12 pro (Mobile)',
    },
    {
        id: 3,
        title: 'Asus Zenfone Max (Mobile)'
    },
    {
        id: 4,
        title: "Mixer (Kitchen item)",
    },
    {
        id: 5,
        title: "Nokia",
    },
    {
        id: 6,
        title: "Asus Laptop",
    },
    {
        id: 7,
        title: "Lenovo Laptop",
    },
    {
        id: 8,
        title: "Samsung Galaxy S21 Ultra (512GB) - Phantom Black (Mobile)",
    },
    {
        id: 9,
        title: "Sony PlayStation 5",
    },
    {
        id: 10,
        title: "LG OLED65CXPUA 65-inch 4K Smart OLED TV",
    },
    {
        id: 11,
        title: "Bose QuietComfort 35 II Wireless Bluetooth Headphones",
    },
    {
        id: 12,
        title: "Dell XPS 13 (2021) - 13.4-inch UHD+ Touch Laptop",
    },
    {
        id: 13,
        title: "Canon EOS R5 Mirrorless Camera",
    },
    {
        id: 14,
        title: "Amazon Echo Dot (4th Gen) - Smart Speaker with Alexa",
    },
    {
        id: 15,
        title: "Fitbit Versa 3 Health & Fitness Smartwatch",
    },
    // Add more items as needed
];


const ProductSearch = (props) => {
    
    const [result, setResult] = useState(productsData);
    const [allProducts, setAllProducts] = useState(productsData);

    useEffect(() => {
        console.log("rendered");
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

    
    
      const filterProducts = (query) => {
            if (!query) {
                setResult(allProducts); 
            }
    
            const filtered = allProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setResult(filtered);
        };
    
    
    const searchFunc = (e) => {
        const query = props.searchText;
        filterProducts(query);
    };

    useEffect(()=>{
      searchFunc();
    },[props.searchText])


    return (
        <>
            {/* <input type="text" value={searchText} placeholder='Search Here'  /> */}
            {/* <button onClick={filterProducts}>Search</button> */}

            <div>
                <h3 style={{ textAlign: 'center' }}>
                    Amazon Products
                </h3>
                {
                    result.map(({ id, title, thumbnail }) => {
                        return (<>
                        <div key= {id} className="productBox">
                        <img src={thumbnail}></img>
                        <h2 >{title}</h2>
                        </div>
                        </>);

                    })
                }
            </div>
        </>
    )
};

export default ProductSearch;