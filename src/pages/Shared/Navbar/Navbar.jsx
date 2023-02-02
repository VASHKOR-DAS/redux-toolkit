import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    /**
     * store theke rcv
     * useSelector holo state k subscribe(data change hole state k update kora) kore rakhe, jeno kono data change hole seta items variable a chole jay
     * 
     * useSelector((state) => state.cart) akhane (state) name a jei parameter ase,
     * seta amader puro state, jar vetor theke ami cart namer property (cartSlice.js a, name: 'cart') er value ta get korte chacchi
     */
    const items = useSelector((state) => state.cart);

    return (
        <div className='navBar'>
            <span className='logo'>Redux Store</span>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                <span className='cartCount'>Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;