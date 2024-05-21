import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderList: [],
        order: {},
    },
    reducers: {
        createOrder() {},
        getMyOrders() {},
        getAllOrders() {},
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setOrderList: (state, action) => {
            state.orderList = action.payload;
        },
        deleteOrder: (state, action) => {
            state.orderList = state.orderList.filter(
                (order) => order.id !== action.payload
            );
        },
        getOrderById() {},
    },
});

export const {
    createOrder,
    setOrder,
    setOrderList,
    getMyOrders,
    getAllOrders,
    deleteOrder,
    getOrderById,
} = orderSlice.actions;
export default orderSlice.reducer;
