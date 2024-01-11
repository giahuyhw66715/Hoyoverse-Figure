import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
    },
    reducers: {
        getAllCategories() {},
        setCategories: (state, action) => ({
            ...state,
            categories: action.payload,
        }),
    },
});

export const { getAllCategories, setCategories } = categorySlice.actions;
export default categorySlice.reducer;
