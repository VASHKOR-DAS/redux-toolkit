import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({  // createSlice amader jnno reducers toiri kore action o toiri kore

    name: 'cart',

    initialState: [],

    //ata diye amader state change kora jabe
    // reducers holo pure function, pure function holo, jeta reducer a thakbe seta chara bairer kono jinis change korbe na
    // add function diye cart a product add korbo
    // remove function diye cart theke ta remove korbo
    reducers: {
        add(state, action) {    //state bolbe initialState er array k bojhay
            state.push(action.payload);     // initialState er array te kono action hole seta push krbo

        },

        remove(state, action) {
            state.filter(item => item.id !== action.payload); // jei id te click kora hobe, seta state array theke remove hye jabe
        },
    },

});


export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;