import { takeLatest } from "redux-saga/effects";
import {
    addCategory,
    deleteCategory,
    getCategoryById,
    getCategoryList,
    updateCategory,
} from "./categorySlice";
import {
    handleAddNewCategory,
    handleDeleteCategory,
    handleGetCategoryById,
    handleGetCategoryList,
    handleUpdateCategory,
} from "./categoryHandlers";

function* categorySaga() {
    yield takeLatest(getCategoryList.type, handleGetCategoryList);
    yield takeLatest(addCategory.type, handleAddNewCategory);
    yield takeLatest(deleteCategory.type, handleDeleteCategory);
    yield takeLatest(getCategoryById.type, handleGetCategoryById);
    yield takeLatest(updateCategory.type, handleUpdateCategory);
}

export default categorySaga;
