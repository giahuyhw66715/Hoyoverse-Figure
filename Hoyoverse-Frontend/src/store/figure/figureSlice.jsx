import { createSlice } from "@reduxjs/toolkit";

const figureSlice = createSlice({
    name: "figure",
    initialState: {
        figures: [],
    },
    reducers: {
        getAllFigures() {},
        setFigures: (state, action) => ({
            ...state,
            figures: action.payload,
        }),
        addFigure: (state, action) => ({
            ...state,
            figures: action.payload,
        }),
    },
});

export const { getAllFigures, setFigures, addFigure } = figureSlice.actions;
export default figureSlice.reducer;
