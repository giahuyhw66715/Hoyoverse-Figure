import { call, put } from "redux-saga/effects";
import {
    requestAddNewCategory,
    requestCategoryList,
    requestDeleteCategory,
    requestGetCategoryById,
    requestUpdateCategory,
} from "./categoryRequest";
import { setCategory, setCategoryList } from "./categorySlice";

function* handleGetCategoryList({ payload }) {
    try {
        const response = yield call(requestCategoryList, payload);
        yield put(setCategoryList(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleAddNewCategory({ payload }) {
    try {
        yield call(requestAddNewCategory, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteCategory({ payload }) {
    try {
        yield call(requestDeleteCategory, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleGetCategoryById({ payload }) {
    try {
        const response = yield call(requestGetCategoryById, payload);
        yield put(setCategory(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleUpdateCategory({ payload }) {
    try {
        yield call(requestUpdateCategory, payload);
    } catch (error) {
        console.log(error);
    }
}

export {
    handleGetCategoryList,
    handleAddNewCategory,
    handleDeleteCategory,
    handleGetCategoryById,
    handleUpdateCategory,
};
