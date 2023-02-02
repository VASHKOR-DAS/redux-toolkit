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