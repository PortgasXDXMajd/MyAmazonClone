import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../state-provider/StateProvider';

function SubTotal() {
    const [{basket}] = useStateValue();

    const getTotalPrise = ()=>{
       var total = 0;
       basket.map((item)=>total+= item.prise);
       return total;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                className="subtotal_info"
                renderText={(value)=>(
                    <div>
                        <p>subtotal ({basket?.length} items): <strong>{getTotalPrise()} $</strong></p>
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
