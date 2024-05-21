import { takeLatest } from "redux-saga/effects";
import {
    addFigure,
    deleteFigure,
    getFigure,
    getFigureList,
    getGenshinFigureList,
    getHonkaiFigureList,
    updateFigure,
} from "./figureSlice";
import {
    handleAddNewFigure,
    handleDeleteFigure,
    handleGetFigure,
    handleGetFigureList,
    handleGetGenshinFigure,
    handleGetHonkaiFigure,
    handleUpdateFigure,
} from "./figureHandlers";

function* figureSaga() {
    yield takeLatest(getFigureList.type, handleGetFigureList);
    yield takeLatest(getHonkaiFigureList.type, handleGetHonkaiFigure);
    yield takeLatest(getGenshinFigureList.type, handleGetGenshinFigure);
    yield takeLatest(getFigure.type, handleGetFigure);
    yield takeLatest(addFigure.type, handleAddNewFigure);
    yield takeLatest(deleteFigure.type, handleDeleteFigure);
    yield takeLatest(updateFigure.type, handleUpdateFigure);
}

export default figureSaga;
