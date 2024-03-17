import { createSlice } from "@reduxjs/toolkit";
import { figureInitialState } from "../initialState";

const figureSlice = createSlice({
    name: "figure",
    initialState: figureInitialState,
    reducers: {
        getAllFigures() {},
        setFigures: (state, action) => ({
            ...state,
            figures: action.payload.figures,
            page: action.payload.page,
            limit: action.payload.limit,
            totalPages: action.payload.totalPages,
        }),
        addFigure: (state, action) => ({
            ...state,
            figures: [...state.figures, action.payload],
        }),
        resetFigures: () => {
            return figureInitialState;
        },
    },
});

export const { getAllFigures, setFigures, addFigure, setPage, resetFigures } =
    figureSlice.actions;
export default figureSlice.reducer;
