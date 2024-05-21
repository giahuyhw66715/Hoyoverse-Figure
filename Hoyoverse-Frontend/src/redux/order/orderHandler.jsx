import { call, put } from "redux-saga/effects";
import {
    requestAddOrderItems,
    requestCreateOrder,
    requestDeleteOrder,
    requestGetAllOrders,
    requestGetMyOrders,
    requestGetOrderById,
} from "./orderRequest";
import { setOrder, setOrderList } from "./orderSlice";
import { toast } from "react-toastify";

function* handleCreateOrder({ payload }) {
    try {
        const response = yield call(requestCreateOrder, payload.order);
        for (let item of payload.cart.cartItems) {
            yield call(requestAddOrderItems, {
                order: {
                    id: response.data.id,
                },
                figure: item.figure,
                quantity: item.quantity,
                price: item.figure.price * item.quantity,
            });
        }
        toast.success("Your order was created successfully!");
        yield put(setOrder(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleGetMyOrders({ payload }) {
    try {
        const response = yield call(requestGetMyOrders, payload);
        yield put(setOrderList(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleGetAllOrders() {
    try {
        const response = yield call(requestGetAllOrders);
        yield put(setOrderList(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteOrder({ payload }) {
    try {
        const response = yield call(requestDeleteOrder, payload);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

function* handleGetOrderById({ payload }) {
    try {
        const response = yield call(requestGetOrderById, payload);
        yield put(setOrder(response.data));
    } catch (error) {
        console.log(error);
    }
}

export {
    handleCreateOrder,
    handleGetMyOrders,
    handleGetAllOrders,
    handleDeleteOrder,
    handleGetOrderById,
};
