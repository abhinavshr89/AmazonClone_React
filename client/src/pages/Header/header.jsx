import React, { useState } from "react";
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate, useParams } from "react-router-dom";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const { username, exists } = useParams();
    const navigate = useNavigate();
    
    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
    // Function to handle Enter key press in search input
    const handleKeyPress = (e) => {
       navigate(`/products/${searchTerm}`);
    };
   
    return (
        <div className="header">
            <Link to="/">
                <img className="header-logo"
                     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="location-box">
                <div className="location-box-logo">
                    <RoomOutlinedIcon />
                </div>
                <div className="location-box-details">
                    <p className="location-p1">Deliver to User</p>
                    <p className="location-p2">Your Location...</p>
                </div>
            </div>
            <div className="header-search">
                <button className="all-btn">All</button>
                <input
                    className="header-searchInput" 
                    type="text" 
                    value={searchTerm} 
                    onChange={handleSearchInputChange} 
                    placeholder="Search products..."
                />
                <button className="search-button" onClick={handleKeyPress}>
                    <SearchIcon className="header-SearchIcon" />
                </button>
            </div>
            <div className="header-nav">
                <div className="country-box">
                    <div className="country-logo">
                        <img src="https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png" alt="" />
                    </div>
                    <div className="country-language">
                        <p>EN</p>
                        <ArrowDropDownOutlinedIcon />
                    </div>
                </div>
                <div className="header-option">
                <span className="header-optionOne">
                        {username ? `Hello ${username}` : <Link className="header-signin" to="/signin">Sign In</Link>}
                    </span>
                    <span className="header-optionTwo">Account & Lists</span>
                </div>
                <div className="header-option">
                    <span className="header-optionOne">Return</span>
                    <span className="header-optionTwo">& Orders</span>
                </div>
                <div className="header-option header-option-3">
                    <Link to="http://localhost:5173/cart">
                        <ShoppingCartOutlinedIcon className="header-option-shoppingIcon" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
