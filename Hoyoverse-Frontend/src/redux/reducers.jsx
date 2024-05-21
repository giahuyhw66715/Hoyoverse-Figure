import { combineReducers } from "@reduxjs/toolkit";
import figureSlice from "./figure/figureSlice";
import categorySlice from "./category/categorySlice";
import seriesSlice from "./series/seriesSlice";
import authSlice from "./auth/authSlice";
import dropdownSlice from "./dropdown/dropdownSlice";
import manufacturerSlice from "./manufacturer/manufacturerSlice";
import CartSlice from "./cart/CartSlice";
import orderSlice from "./order/orderSlice";
import userSlice from "./user/userSlice";

export const reducer = combineReducers({
    figure: figureSlice,
    category: categorySlice,
    series: seriesSlice,
    manufacturer: manufacturerSlice,
    dropdowns: dropdownSlice,
    cart: CartSlice,
    order: orderSlice,
    auth: authSlice,
    user: userSlice,
});
