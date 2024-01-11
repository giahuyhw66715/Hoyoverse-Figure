import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
    name: "series",
    initialState: {
        series: [],
    },
    reducers: {
        getAllSeries() {},
        setSeries: (state, action) => ({
            ...state,
            series: action.payload,
        }),
    },
});

export const { getAllSeries, setSeries } = seriesSlice.actions;
export default seriesSlice.reducer;
