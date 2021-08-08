import React,{useState, useEffect} from 'react'
import './PaymentPage.css'
import { useStateValue } from '../state-provider/StateProvider';
import CheckoutProduct from '../checkout-components/CheckoutProduct';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getTotalBasket } from '../state-provider/reducer';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function PaymentPage() {
    const history = useHistory();
    const [{basket ,user},] = useStateValue();
    const [error, setError] = useState("Error");
    const [disabled, setDisabled] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                url:`/payments/create?total=${getTotalBasket(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent - payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders')
        })

    }

    const handleChange = (event)=>{
        setDisabled(event.empty);
        setError(event.error? event.error.message:"");
    }

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
                        <form onSubmit={handleSubmit}> 
                            <div className="card_elements">
                                <CardElement onChange={handleChange} />
                            </div>
                            <div className="paymentPage_TotalOrder">
                                <CurrencyFormat
                                    className="totalOrder_info"
                                    renderText={(value)=>(
                                        <div className="paymentTotal_header">
                                            <p>Order Total ({basket?.length} items): <strong>{value}</strong></p>
                                        </div>
                                    )}
                                    decimalScale={2}
                                    value={getTotalBasket(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} className="totalOrder_BuyButton" type="submit" >
                                    <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                            {error && <p className="error">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage