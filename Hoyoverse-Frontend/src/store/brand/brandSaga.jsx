import { takeLatest } from "redux-saga/effects";
import { addBrand, getAllBrands } from "./brandSlice";
import { handleAddBrand, handleGetAllBrands } from "./brandHandlers";

function* brandSaga() {
    yield takeLatest(getAllBrands.type, handleGetAllBrands);
    yield takeLatest(addBrand.type, handleAddBrand);
}

export default brandSaga;
