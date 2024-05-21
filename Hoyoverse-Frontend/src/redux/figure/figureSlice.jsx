import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    figureList: [],
    figure: {},
    honkaiFigureList: [],
    genshinFigureList: [],
    isLoading: false,
    totalPages: 1,
    currentPage: 0,
    pageLimit: 8,
    request: {},
};

const figureSlice = createSlice({
    name: "figure",
    initialState,
    reducers: {
        getFigureList() {},
        getFigure() {},
        getHonkaiFigureList() {},
        getGenshinFigureList() {},
        setFigureList: (state, action) => {
            state.figureList = action.payload.figureList;
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.pageLimit = action.payload.pageLimit;
        },
        setHonkaiFigureList: (state, action) => {
            state.honkaiFigureList = action.payload;
        },
        setGenshinFigureList: (state, action) => {
            state.genshinFigureList = action.payload;
        },
        setFigure: (state, action) => {
            state.figure = action.payload;
        },
        setRequest: (state, action) => {
            state.request = action.payload;
        },
        addFigure() {},
        deleteFigure: (state, action) => {
            state.figureList = state.figureList.filter(
                (figure) => figure.id !== action.payload.figureId
            );
        },
        updateFigure: (state, action) => {
            state.figure = action.payload;
        },
    },
});

export const {
    getFigureList,
    getFigure,
    getHonkaiFigureList,
    getGenshinFigureList,
    setFigureList,
    setHonkaiFigureList,
    setGenshinFigureList,
    setFigure,
    setRequest,
    addFigure,
    deleteFigure,
    updateFigure,
} = figureSlice.actions;
export default figureSlice.reducer;
