import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
    name: "series",
    initialState: {
        seriesList: [],
        series: {},
    },
    reducers: {
        getSeriesList() {},
        setSeriesList: (state, action) => {
            state.seriesList = action.payload;
        },
        addSeries: (state, action) => {
            state.seriesList = [...state.seriesList, action.payload];
        },
        deleteSeries: (state, action) => {
            state.seriesList = state.seriesList.filter(
                (series) => series.id !== action.payload
            );
        },
        getSeriesById() {},
        setSeries: (state, action) => {
            state.series = action.payload;
        },
        updateSeries: (state, action) => {
            state.series = action.payload;
        },
    },
});

export const {
    getSeriesList,
    setSeriesList,
    addSeries,
    deleteSeries,
    getSeriesById,
    setSeries,
    updateSeries,
} = seriesSlice.actions;
export default seriesSlice.reducer;
