import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import seriesSlice from "./series/seriesSlice";
import figureSlice from "./figure/figureSlice";
import imageSlice from "./image/imageSlice";

export const reducer = combineReducers({
    category: categorySlice,
    series: seriesSlice,
    figure: figureSlice,
    image: imageSlice,
});
