import React, { useContext, useState } from "react";
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import noteContext from "../../../context/noteContext";
import { Link } from "react-router-dom";


function Header() {
    // Declare state variable for the input field
    const [searchTerm, setSearchTerm] = useState('');
    const contextValues = useContext(noteContext);

    // Function to handle search input change
    const handleSearchInputChange = (e) => {
       
        setSearchTerm(e.target.value); // Update local state
        
      
    };
    
    const handleButtonChange = (e) => {
         
        contextValues.setSearchText(searchTerm);
      
    };
    
   
    return (
        <div className="header">
            <img className="header-logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

            <div className="header-search">
                {/* Use state variable as value and update it on change */}
                <button className="all-btn">
                    All
                </button>
                <input
                    className="header-searchInput" 
                    type="text" 
                    value={searchTerm} // Bind value to local state
                    onChange={handleSearchInputChange} // Call function on change
                    placeholder="Search products..."
                />
                <button className="search-button"  onClick={handleButtonChange}>
                    <SearchIcon className="header-SearchIcon"></SearchIcon>
                </button>
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionOne">Hello,<Link className="header-signin" to="http://localhost:5173/signin"> sign in</Link> </span>
                    <span className="header-optionTwo">Account & Lists</span>
                </div>

                <div className="header-option">
                    <span className="header-optionOne">Return</span>
                    <span className="header-optionTwo">& Orders</span>
                </div>

                <div className="header-option header-option-3">
                    <Link to="http://localhost:5173/cart">
                    <ShoppingCartOutlinedIcon className="header-option-shoppingIcon"></ShoppingCartOutlinedIcon>

                    </Link>
                   
                </div>
            </div>
        </div>
    );
}

export default Header;
