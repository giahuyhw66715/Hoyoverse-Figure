import { takeLatest } from "redux-saga/effects";
import {
    addManufacturer,
    getManufacturerById,
    getManufacturerList,
    updateManufacturer,
} from "./manufacturerSlice";
import {
    handleAddNewManufacturer,
    handleGetManufacturerById,
    handleGetManufacturerList,
    handleUpdateManufacturer,
} from "./manufacturerHandlers";

function* manufacturerSaga() {
    yield takeLatest(getManufacturerList.type, handleGetManufacturerList);
    yield takeLatest(addManufacturer.type, handleAddNewManufacturer);
    yield takeLatest(updateManufacturer.type, handleUpdateManufacturer);
    yield takeLatest(getManufacturerById.type, handleGetManufacturerById);
}

export default manufacturerSaga;
