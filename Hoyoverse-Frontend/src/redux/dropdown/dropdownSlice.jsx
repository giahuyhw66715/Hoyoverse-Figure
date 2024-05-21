import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
    name: "dropdowns",
    initialState: {},
    reducers: {
        openDropdown: (state, action) => {
            state[action.payload] = true;
        },
        closeDropdown: (state, action) => {
            state[action.payload] = false;
        },
        toggleDropdown: (state, action) => {
            state[action.payload] = !state[action.payload];
        },
    },
});

export const { openDropdown, closeDropdown, toggleDropdown } =
    dropdownSlice.actions;
export default dropdownSlice.reducer;
