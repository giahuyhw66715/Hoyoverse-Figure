import { call, put } from "redux-saga/effects";
import {
    requestAddToCart,
    requestClearCart,
    requestDeleteCartItem,
    requestGetCartByUser,
    requestUpdateCartItem,
} from "./cartRequest";
import { setCart } from "./CartSlice";
import { toast } from "react-toastify";

function* handleAddToCart({ payload }) {
    try {
        yield call(requestAddToCart, payload);
        toast.success("Add to cart successfully");
    } catch (error) {
        console.log(error);
    }
}

function* handleGetCartByUser({ payload }) {
    try {
        const response = yield call(requestGetCartByUser, payload);
        yield put(setCart(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleUpdateCartItem({ payload }) {
    try {
        yield call(requestUpdateCartItem, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteCartItem({ payload }) {
    try {
        yield call(requestDeleteCartItem, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleClearCart({ payload }) {
    try {
        yield call(requestClearCart, payload);
    } catch (error) {
        console.log(error);
    }
}

export {
    handleAddToCart,
    handleGetCartByUser,
    handleUpdateCartItem,
    handleDeleteCartItem,
    handleClearCart,
};
