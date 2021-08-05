import React from 'react';
import { products } from '../DummyData/Data';
import Product from '../product-components/Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            
            <img
                className="home_backgroundImage"
                src = "https://vistapointe.net/images/berlin-wallpaper-10.jpg"
                alt = "background_Ad"
            />

            <div className="home_row">
                <Product product={products[0]} />
                <Product product={products[1]} />
            </div>

            <div className="home_row">
                <Product product={products[2]} />
                <Product product={products[3]} />
                <Product product={products[4]} />
            </div>

            <div className="home_row">
                <Product product={products[5]} />
            </div>

        </div>
    )
}

export default Home 