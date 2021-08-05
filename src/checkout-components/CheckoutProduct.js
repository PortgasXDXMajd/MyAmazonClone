import React from 'react';
import './CheckoutProduct.css';
import ProductInfo from '../product-components/ProductInfo';
import MyButton from '../MyButton.js';
import { useStateValue } from '../state-provider/StateProvider';

function CheckoutProduct({product}) {
    const [,dispatch] = useStateValue();

    const removeProductFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: product.id
        });
    }
    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct_image"
                src={product?.imageUrl}
                alt={product?.name}/>

            <ProductInfo product={product}>
                <MyButton onPress={removeProductFromBasket} label="Remove From Cart" />
            </ProductInfo>
        </div>
    )
}

export default CheckoutProduct