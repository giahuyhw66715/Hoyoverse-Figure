import { call, put } from "redux-saga/effects";
import {
    requestAddNewManufacturer,
    requestDeleteManufacturer,
    requestGetManufacturerById,
    requestGetManufacturerList,
    requestUpdateManufacturer,
} from "./manufacturerRequest";
import { setManufacturer, setManufacturerList } from "./manufacturerSlice";

function* handleGetManufacturerList({ payload }) {
    try {
        const response = yield call(requestGetManufacturerList, payload);
        yield put(setManufacturerList(response.data?.content));
    } catch (error) {
        console.log(error);
    }
}

function* handleAddNewManufacturer({ payload }) {
    try {
        const response = yield call(requestAddNewManufacturer, payload);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteManufacturer({ payload }) {
    try {
        yield call(requestDeleteManufacturer, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleUpdateManufacturer({ payload }) {
    try {
        yield call(requestUpdateManufacturer, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleGetManufacturerById({ payload }) {
    try {
        const response = yield call(requestGetManufacturerById, payload);
        yield put(setManufacturer(response.data));
    } catch (error) {
        console.log(error);
    }
}

export {
    handleGetManufacturerList,
    handleAddNewManufacturer,
    handleDeleteManufacturer,
    handleGetManufacturerById,
    handleUpdateManufacturer,
};
