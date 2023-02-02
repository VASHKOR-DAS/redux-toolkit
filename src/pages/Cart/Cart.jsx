import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../store/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();  // kono state change korte hole dispatch lagbe

    const products = useSelector(state => state.cart);
    console.log(products); //ata cart route a giye console open korte hobe




    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }

    return (
        <div>
            <h3>Cart</h3>

            <div className="cartWrapper">
                {
                    products.map(product => (

                        <div className="cartCard" key={product.id}>
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button className='btn' onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;