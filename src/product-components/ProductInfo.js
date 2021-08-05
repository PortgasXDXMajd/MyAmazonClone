import React from 'react'
import './Product.css';

function ProductInfo({product, children}) {
    return (
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
            {children}
        </div>
    )
}

export default ProductInfo
