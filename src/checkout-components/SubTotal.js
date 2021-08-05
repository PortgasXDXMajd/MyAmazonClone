import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../state-provider/StateProvider';
import { getTotalBasket } from '../state-provider/reducer';

function SubTotal() {
    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                className="subtotal_info"
                renderText={(value)=>(
                    <div>
                        <p>subtotal ({basket?.length} items): <strong>{value}</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getTotalBasket(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className="subtotal_button">Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
