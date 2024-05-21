import { takeLatest } from "redux-saga/effects";
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getMyOrders,
    getOrderById,
} from "./orderSlice";
import {
    handleCreateOrder,
    handleDeleteOrder,
    handleGetAllOrders,
    handleGetMyOrders,
    handleGetOrderById,
} from "./orderHandler";

function* orderSaga() {
    yield takeLatest(createOrder.type, handleCreateOrder);
    yield takeLatest(getMyOrders.type, handleGetMyOrders);
    yield takeLatest(getAllOrders.type, handleGetAllOrders);
    yield takeLatest(getOrderById.type, handleGetOrderById);
    yield takeLatest(deleteOrder.type, handleDeleteOrder);
}

export default orderSaga;
