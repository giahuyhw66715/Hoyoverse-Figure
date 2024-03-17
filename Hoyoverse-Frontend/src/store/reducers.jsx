import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import seriesSlice from "./series/seriesSlice";
import figureSlice from "./figure/figureSlice";
import brandSlice from "./brand/brandSlice";

export const reducer = combineReducers({
    brand: brandSlice,
    category: categorySlice,
    series: seriesSlice,
    figure: figureSlice,
});
