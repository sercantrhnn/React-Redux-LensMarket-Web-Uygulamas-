import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    adet: 0,
    toplamTutar: 0,
}


const sepetSlice = createSlice({
    name:'sepet',
    initialState,
    reducers:{
        addCart:(state,action) => {
            state.carts.push(action.payload)
         },
        artir(state,action){
            let cart = state.carts;
            const cartItem = cart.find((item)=> item.id === action.payload)
            cartItem.birimAdet += 1;
           
        },
        azalt: (state,action)=> {
            let cart = state.carts;
            const cartItem = cart.find((item)=> item.id === action.payload)
            if (cartItem.birimAdet > 1) {
                cartItem.birimAdet -= 1;
            }
        },
        removeCart(state,action){
            const updateItems = state.carts.filter((cart)=>{
                return cart.id !== action.payload
            });
            state.carts = updateItems;

        },
        totalFiyat: (state) => {
            let total = 0;
            let adet = 0;
            state.carts.forEach((item)=> {
                total += item.birimAdet * item.fiyat;
                adet += item.birimAdet
            })
            state.adet = adet;
            state.toplamTutar = total;
        }
    }
})

export const {addCart, artir,azalt,removeCart,totalFiyat} = sepetSlice.actions;
export default sepetSlice.reducer;