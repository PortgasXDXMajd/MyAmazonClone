import React from 'react';
import Product from '../product-components/Product';
import './Home.css';

function Home() {
    const product = {
        id: 1,
        name: "Stereo Gaming Headset",
        description:"BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller",
        prise: 29.99,
        imageUrl:"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UL320_.jpg",
        rate:4
    };

    return (
        <div className="home">
            
            <img
                className="home_backgroundImage"
                src = "https://vistapointe.net/images/berlin-wallpaper-10.jpg"
                alt = "background_Ad"
            />

            <div className="home_row">
                <Product product={product} />
                <Product product={product} />
            </div>

            <div className="home_row">
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>

            <div className="home_row">
                <Product product={product} />
            </div>

        </div>
    )
}

export default Home 