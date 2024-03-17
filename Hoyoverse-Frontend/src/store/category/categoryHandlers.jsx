import { call, put } from "redux-saga/effects";
import { requestAddCategory, requestAllCategories } from "./categoryRequest";
import { setCategories } from "./categorySlice";
import { toast } from "react-toastify";

function* handleAddCategory({ payload }) {
    try {
        yield call(requestAddCategory, payload);
        toast.success("Add new category successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

function* handleGetAllCategories({ payload }) {
    try {
        const response = yield call(requestAllCategories, payload);
        yield put(setCategories(response.data?.content));
    } catch (error) {
        console.log(error);
    }
}

export { handleGetAllCategories, handleAddCategory };
