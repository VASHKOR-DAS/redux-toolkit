import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({    // Object.freeze er moddhe loading state er value ta dewa mane, ata kei change korte parbe na, readOnly, ata api call a use korte parbo, jekhane jekhane data fetch hobe

    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'

})


const productSlice = createSlice({

    name: 'product',

    initialState: {
        data: [],
        status: STATUSES.IDLE   // default hisebe ata normal thakbe
    },

    reducers: {
        setProducts(state, action) {

            // DO not do this, reducers er vitor theke api call use kora jabe na, karon ata async vabei call hoy & ata pure function, tai amader 1ta middleware use korte hobe, sta holo thunk
            // const res = await fetch('https://fakestoreapi.com/products');
            state.data = action.payload;
        },

        setStatus(state, action) {
            state.status = action.payload;  // loading state er jnno, akhane status property holo Loading Status gulo
        },
    },

});


export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


// Normal thunks (thunks 1ta function, tai ata k export korte hoy. tar vitor amader new 1ta function return korte hoy)
export function fetchProducts() {

    return async function fetchProductThunk(dispatch, getState) {

        // api call hobar age amader loading state hobe
        dispatch(setStatus(STATUSES.LOADING));

        /** 
        getState holo amader current state k get krr jnno, hote pare akhane amader multiple request krr proyojon holo, ai (url er upor) state(data) er upor nirvor kore

        like
        const prop = getState().data
        */
        try {

            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();

            // api call kore jei data ta peyechi seta initial state a set krr jnno 1ta action dispatch korte hobe
            dispatch(setProducts(data))

            
            // data pawar por status hobe idle
            dispatch(setStatus(STATUSES.IDLE));




        } catch (err) {
            console.error(err);

            // kono error hole ui te status error dekhabe
            dispatch(setStatus(STATUSES.ERROR));

        }


    }

}
