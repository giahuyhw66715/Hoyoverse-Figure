import { takeLatest } from "redux-saga/effects";
import { addCategory, getAllCategories } from "./categorySlice";
import { handleAddCategory, handleGetAllCategories } from "./categoryHandlers";

function* categorySaga() {
    yield takeLatest(getAllCategories.type, handleGetAllCategories);
    yield takeLatest(addCategory.type, handleAddCategory);
}

export default categorySaga;
