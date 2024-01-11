import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "image",
    initialState: {
        images: [],
    },
    reducers: {
        getImages() {},
        setImages: (state, action) => ({
            ...state,
            images: action.payload,
        }),
        addImages: (state, action) => ({
            ...state,
            images: action.payload,
        }),
    },
});

export const { getImages, setImages, addImages } = imageSlice.actions;
export default imageSlice.reducer;
