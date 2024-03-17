import { createSlice } from "@reduxjs/toolkit";
import { brandInitialState } from "../initialState";

const brandSlice = createSlice({
    name: "brands",
    initialState: brandInitialState,
    reducers: {
        getAllBrands() {},
        setBrands: (state, action) => ({
            ...state,
            brands: action.payload,
        }),
        addBrand: (state, action) => {
            state.brands.push(action.payload);
            return state;
        },
    },
});

export const { getAllBrands, setBrands, addBrand } = brandSlice.actions;
export default brandSlice.reducer;
