import { createSlice } from "@reduxjs/toolkit";
import { categoryInitialState } from "../initialState";

const categorySlice = createSlice({
    name: "category",
    initialState: categoryInitialState,
    reducers: {
        getAllCategories() {},
        setCategories: (state, action) => ({
            ...state,
            categories: action.payload,
        }),
        addCategory: (state, action) => {
            state.categories.push(action.payload);
            return state;
        },
    },
});

export const { getAllCategories, setCategories, addCategory } =
    categorySlice.actions;
export default categorySlice.reducer;
