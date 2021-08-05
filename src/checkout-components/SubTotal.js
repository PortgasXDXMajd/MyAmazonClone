import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';

function SubTotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                className="subtotal_info"
                renderText={(value)=>(
                    <div>
                        <p>subtotal ({0} items): <strong>0</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className="subtotal_button">Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
