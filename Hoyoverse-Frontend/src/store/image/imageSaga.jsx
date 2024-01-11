import { handleUploadImage } from "./imageHandlers";
import { addImages } from "./imageSlice";
import { takeLatest } from "redux-saga/effects";

function* imageSaga() {
    yield takeLatest(addImages.type, handleUploadImage);
}

export default imageSaga;
