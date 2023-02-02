import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div>
                <h2 className="heading">
                    Welcome to Redux toolkit Store
                </h2>
            </div>

            <section>
                <h3>Products</h3>
                <Products></Products>
            </section>
        </div>
    );
};

export default Home;