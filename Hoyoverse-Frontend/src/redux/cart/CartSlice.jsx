import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {},
    },
    reducers: {
        getCartByUser() {},
        addToCart() {},
        updateCartItem: (state, action) => {
            state.cart.cartItems = state.cart.cartItems.map((item) =>
                item.id !== action.payload.id ? item : action.payload
            );
        },
        deleteCartItem: (state, action) => {
            state.cart.cartItems = state.cart.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },
        clearCart: (state) => {
            state.cart.cartItems = [];
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const {
    getCartByUser,
    addToCart,
    setCart,
    updateCartItem,
    deleteCartItem,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
