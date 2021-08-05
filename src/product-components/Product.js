import React from 'react';
import './Product.css';
import {useStateValue} from '../state-provider/StateProvider';

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
            <div className="product_info">
                <div className="product_title">
                    <strong>{product.name}</strong>
                </div>

                <div className="product_description">
                    <p>{product.description}</p>
                </div>

                <div className="product_price">
                    <small>$</small>
                    <strong>{product.prise}</strong>
                </div>
                <div className="product_rating">
                    {Array(product.rate).fill().map( (_,i) => (
                        <span className="product_rating_star">&#11088;</span>
                    ))}
                </div>
            </div>
            
            <img
                className="product_image"
                src={product.imageUrl}
                alt="product_image"
            />
            <button className="product_button" onClick={addProductToBasket}>Add To Cart</button>
            

        </div>
    )
};

export default Product;