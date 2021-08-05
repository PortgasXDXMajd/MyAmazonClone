import React from 'react';
import './Product.css';
import {useStateValue} from '../state-provider/StateProvider';
import ProductInfo from './ProductInfo';
import MyButton from '../MyButton';

function Product({product}) {
    const [,dispatch] = useStateValue();

    const addProductToBasket = ()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: product
        });
    }

    return (
        <div className="product">
            <ProductInfo product={product} />            
            <img
                className="product_image"
                src={product.imageUrl}
                alt="product_image"
            />
            <MyButton onPress={addProductToBasket} label="Add To Cart" />
        </div>
    )
};

export default Product;