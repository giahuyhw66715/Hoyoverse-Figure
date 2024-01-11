import { takeLatest } from "redux-saga/effects";
import { handleAddFigure, handleGetAllFigures } from "./figureHandlers";
import { addFigure, getAllFigures } from "./figureSlice";

function* figureSaga() {
    yield takeLatest(getAllFigures.type, handleGetAllFigures);
    yield takeLatest(addFigure.type, handleAddFigure);
}

export default figureSaga;
