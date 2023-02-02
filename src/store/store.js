import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {

        cart: cartReducer,
    },
});

export default store;


// cartReducer means jeta cartSlice krr jnno baniye chilam
// akhon jodi onno kono kaj korte chai seta import kote niye akhane akta property diye pass korlei hobe

// like onekta firebase er authInfo er moto (sobgulo method ak jayga theke call kore)

/** 
cartSlice a ja korchi, seta ami 1ta property diye store a dhore rakhchi, jenon kono kichu amra kono variable a dhore rakhi,
 like, 
    const url = 'https:// ...';
    fetch(url);
*/