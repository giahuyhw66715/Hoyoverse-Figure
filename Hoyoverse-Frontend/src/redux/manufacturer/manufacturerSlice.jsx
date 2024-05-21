import { createSlice } from "@reduxjs/toolkit";

const manufacturerSlice = createSlice({
    name: "manufacturer",
    initialState: {
        manufacturerList: [],
        manufacturer: {},
    },
    reducers: {
        getManufacturerList() {},
        setManufacturerList: (state, action) => {
            state.manufacturerList = action.payload;
        },
        addManufacturer: (state, action) => {
            state.manufacturerList = [
                ...state.manufacturerList,
                action.payload,
            ];
        },
        deleteManufacturer: (state, action) => {
            state.manufacturerList = state.manufacturerList.filter(
                (manufacturer) => manufacturer.id !== action.payload
            );
        },
        getManufacturerById() {},
        setManufacturer: (state, action) => {
            state.manufacturer = action.payload;
        },
        updateManufacturer: (state, action) => {
            state.manufacturer = action.payload;
        },
    },
});

export const {
    getManufacturerList,
    setManufacturerList,
    addManufacturer,
    deleteManufacturer,
    getManufacturerById,
    setManufacturer,
    updateManufacturer,
} = manufacturerSlice.actions;
export default manufacturerSlice.reducer;
