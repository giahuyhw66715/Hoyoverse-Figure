import { takeLatest } from "redux-saga/effects";
import {
    addToCart,
    clearCart,
    deleteCartItem,
    getCartByUser,
    updateCartItem,
} from "./CartSlice";
import {
    handleAddToCart,
    handleClearCart,
    handleDeleteCartItem,
    handleGetCartByUser,
    handleUpdateCartItem,
} from "./cartHandlers";

function* cartSaga() {
    yield takeLatest(addToCart.type, handleAddToCart);
    yield takeLatest(getCartByUser.type, handleGetCartByUser);
    yield takeLatest(updateCartItem.type, handleUpdateCartItem);
    yield takeLatest(deleteCartItem.type, handleDeleteCartItem);
    yield takeLatest(clearCart.type, handleClearCart);
}

export default cartSaga;
