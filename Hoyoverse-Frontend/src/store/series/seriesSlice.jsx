import { createSlice } from "@reduxjs/toolkit";
import { seriesInitialState } from "../initialState";

const seriesSlice = createSlice({
    name: "series",
    initialState: seriesInitialState,
    reducers: {
        getAllSeries() {},
        setSeries: (state, action) => ({
            ...state,
            series: action.payload,
        }),
        addSeries: (state, action) => {
            state.series.push(action.payload);
            return state;
        },
    },
});

export const { getAllSeries, setSeries, addSeries } = seriesSlice.actions;
export default seriesSlice.reducer;
