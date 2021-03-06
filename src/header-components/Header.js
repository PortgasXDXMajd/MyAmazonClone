import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from '../state-provider/StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{basket,user}] = useStateValue();

    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }else{
            
        }

    };
    return (
        <div className="header">
            
            <Link to="/">
                <img className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"/>
            </Link>

            <div className="header_search">
                <input className="header_search_input" type="text"/>
                <SearchIcon className="header_search_icon" />
            </div>

            <div className="header_nav">
                <Link to={!user && `/login`}>
                    <div  onClick={handleAuthentication} className="header_option">
                        <span className="header_option_lineOne">Hello {user? user.email.substring(0, user.email.indexOf('@')).toUpperCase():`Guest`} </span>
                        <span className="header_option_lineTwo">{user?`Sign Out`:`Sign In`}</span>
                    </div>
                </Link>
                <Link to ={user? `/orders`: `/login`}>
                    <div className="header_option">
                        <span className="header_option_lineOne">Return</span>
                        <span className="header_option_lineTwo">{`&`} Order</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_option_lineOne">Your</span>
                    <span className="header_option_lineTwo">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="header_basket">
                    <ShoppingBasketIcon className="header_basket_icon"/>
                    <span className="header_option_lineTwo header_basket_NumberOfItems">{basket?.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default Header