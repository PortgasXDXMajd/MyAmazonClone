import React from 'react'
import './Checkout.css';
import SubTotal from './SubTotal';

function Checkout() {
    return (
        <div className="checkout">
            
            <div className="checkout_left">
                <img 
                    className="checkout_left_ad"
                    src="https://a.storyblok.com/f/67091/500x200/6041c3b2da/amazon-ads.png"
                    alt="ad"/>
                
                <div className="checkout_title">Your Shopping Cart</div>
            </div>


            <div className="checkout_right">
                <SubTotal />
            </div>
            
        </div>
    )
}

export default Checkout