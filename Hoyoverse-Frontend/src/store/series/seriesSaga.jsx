import { takeLatest } from "redux-saga/effects";
import { addSeries, getAllSeries } from "./seriesSlice";
import { handleAddSeries, handleGetAllSeries } from "./seriesHandlers";

function* seriesSaga() {
    yield takeLatest(getAllSeries.type, handleGetAllSeries);
    yield takeLatest(addSeries.type, handleAddSeries);
}

export default seriesSaga;
