import { takeLatest } from "redux-saga/effects";
import { getAllCategories } from "./categorySlice";
import { handleGetAllCategories } from "./categoryHandlers";

function* categorySaga() {
    yield takeLatest(getAllCategories.type, handleGetAllCategories);
}

export default categorySaga;
