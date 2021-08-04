import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            
            <img className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"/>

            <div className="header_search">
                <input className="header_search_input" type="text"/>
                <SearchIcon className="header_search_icon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_lineOne">Hello guest</span>
                    <span className="header_option_lineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_option_lineOne">Return</span>
                    <span className="header_option_lineTwo">{`&`} Order</span>
                </div>
                <div className="header_option">
                    <span className="header_option_lineOne">Your</span>
                    <span className="header_option_lineTwo">Prime</span>
                </div>
            </div>

            <div className="header_basket">
                <ShoppingBasketIcon className="header_basket_icon"/>
                <span className="header_option_lineTwo header_basket_NumberOfItems">0</span>
            </div>

        </div>
    )
}

export default Header