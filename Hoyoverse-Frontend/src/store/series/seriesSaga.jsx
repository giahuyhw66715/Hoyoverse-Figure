import { takeLatest } from "redux-saga/effects";
import { getAllSeries } from "./seriesSlice";
import { handleGetAllSeries } from "./seriesHandlers";

function* seriesSaga() {
    yield takeLatest(getAllSeries.type, handleGetAllSeries);
}

export default seriesSaga;
