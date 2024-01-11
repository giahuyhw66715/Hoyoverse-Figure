import { call, put } from "redux-saga/effects";
import { requestAllCategories } from "./categoryRequest";
import { setCategories } from "./categorySlice";

function* handleGetAllCategories() {
    try {
        const response = yield call(requestAllCategories);
        yield put(setCategories(response.data?.data));
    } catch (error) {
        console.log(error);
    }
}

export { handleGetAllCategories };
