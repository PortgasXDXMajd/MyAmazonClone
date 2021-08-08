import React from 'react'
import moment from 'moment'
import CheckoutProduct from '../checkout-components/CheckoutProduct'
import './Order.css'
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    return (
        <div className="order">

            <div className="order_header">
                <h2>ORDER</h2>
                <small className="order_id">{order.id}</small>
            </div>
            
            <div className="order_info">
                <p>{moment.unix(order.data.created).format("MMMM Do YYYY h:mma")}</p>
                <CurrencyFormat
                    className="subtotal_info"
                    renderText={(value)=>(
                        <div>
                            <p>Order Total ({order.data.basket?.length} {order.data.basket?.length === 1 ? `item`:`items`}): <strong>{value}</strong></p>
                        </div>
                    )}
                    decimalScale={2}
                    value={order.data.amount /100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
               
            </div>


            

            <h3>Items</h3>

            <div className="order_Items">
                {order.data.basket.map(item => (
                    <CheckoutProduct product={item} isButtonNeeded={false}/>
                ))}
            </div>
        </div>
    )
}

export default Order
