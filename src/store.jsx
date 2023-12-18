import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './control/sepetSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})