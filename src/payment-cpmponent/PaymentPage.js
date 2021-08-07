import React from 'react'
import './PaymentPage.css'
import { useStateValue } from '../state-provider/StateProvider';
import CheckoutProduct from '../checkout-components/CheckoutProduct';

function PaymentPage() {
    const [{basket ,user},] = useStateValue();
    return (
        <div className="paymentPage">
            <h1>Checkout({basket?.length} items)</h1>
            <div className="paymentPage_Container">
                <div className="paymentPage_section">
                    <div className="paymentPage_LeftSection">Delivery Address</div>
                    <div className="paymentPage_RightSection">
                        <p>{user?.email}</p>
                        <p>Am Weissenberg 18 APP 122</p>
                        <p>Aachen Germany</p>
                    </div>

                </div>
                <div className="paymentPage_section">
                    <div className="paymentPage_LeftSection">Review Items and delivery</div>
                    <div className="paymentPage_RightSection">
                        <>
                            {basket.map((item)=>(
                                <CheckoutProduct product={item}/>
                            ))}
                        </>
                    </div>

                </div>
                <div className="paymentPage_section">
                    <div className="paymentPage_LeftSection">Payment Method</div>
                    <div className="paymentPage_RightSection">
                        <h3>Card Details</h3>
                        <form>
                            <div className="paymentPage_RightSection_FormField">
                                <input type="number" hint="Card number"/>
                                <input type="date" hint="MM/YY"/>
                                <input type="number" hint="CVC"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
