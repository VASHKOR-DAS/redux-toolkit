import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch(); // handleAdd er jonno

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {

            const res = await fetch('https://fakestoreapi.com/products');

            const data = await res.json();

            // console.log(data);

            setProducts(data);
        }

        fetchProducts();
    }, []);



    // jei product a click korbo seta add hobe, tai product ta parameter hisebe nilam

    // ai selected product ta store a joma rakhte hobe, tarpor sekhan theke amder kaj korte hobe

    /**
     jevebe data store a joma rakhte hoy,
     amader application theke 1ta action despatch korte hoy, tar vitor data o send korte pari, 
     r sei action amder j reducer ase take call kore


     like, cartSlice.js a
     export const { add, remove } = cartSlice.actions; agulo amader action
     ai action er vitor theke add action k call korle,

      add(state, action) {    
            state.push(action.payload);
        },

     ai reducer ta call hobe.

     and kono data pathale seta uporer (action.payload) er vitore giye tar state ta (state.push) change kore dibe.

     */


    const handleAdd = (product) => {

        // console.log(product); // click korle thik moto product pai kina seta janar jnno

        dispatch(add(product));  // dispatch(add(ata payload, mane click korle jeta store a pathabo));
    }

    return <div className='productsWrapper'>
        {
            products.map((product) => (

                <div className='card' key={product.id}>

                    <img src={product.image} alt="" />

                    <h4>{product.title}</h4>

                    <h4>{product.price}</h4>

                    <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>

                    {/* handleAdd(product), ai parameter ta holo map er vitore jei 1ta kore product paici  
                    
                    handleAdd(product.price) sudhu price gulo pete chaile

                    cartSlice a jei action parameter ase. sei action amra ai onClick diye korechi
                    */}


                </div>
            ))
        }
    </div>
};

export default Products;