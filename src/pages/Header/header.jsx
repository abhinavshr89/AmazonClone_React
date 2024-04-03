import React, { useState } from "react";
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProductSearch from "../products/product";

function Header(props) {
    // Declare state variable for the input field
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <div className="header">
            <img  className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

            <div className="header-search">
                {/* Use state variable as value and update it on change */}
                <input 
                    className="header-searchInput" 
                    type="text" 
                    value={props.searchText}
                    onChange={(e)=>props.setSearchText(e.target.value)}
                    placeholder="Search products..."
                />
                <button>

                <SearchIcon   className="header-SearchIcon"></SearchIcon>
                </button>
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionOne">Hello, sign in</span>
                    <span className="header-optionTwo">Account & Lists</span>
                </div>

                <div className="header-option">
                    <span className="header-optionOne">Return</span>
                    <span className="header-optionTwo">& Orders</span>
                </div>

                <div className="header-option header-option-3">
                    <ShoppingCartOutlinedIcon className="header-option-shoppingIcon"></ShoppingCartOutlinedIcon>
                </div>
            </div>
        </div>
    )
}

export default Header;

