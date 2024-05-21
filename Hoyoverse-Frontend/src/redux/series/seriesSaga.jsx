import { takeLatest } from "redux-saga/effects";
import {
    addSeries,
    deleteSeries,
    getSeriesById,
    getSeriesList,
    updateSeries,
} from "./seriesSlice";
import {
    handleAddNewSeries,
    handleDeleteSeries,
    handleGetSeriesById,
    handleGetSeriesList,
    handleUpdateSeries,
} from "./seriesHandlers";

function* seriesSaga() {
    yield takeLatest(getSeriesList.type, handleGetSeriesList);
    yield takeLatest(addSeries.type, handleAddNewSeries);
    yield takeLatest(deleteSeries.type, handleDeleteSeries);
    yield takeLatest(getSeriesById.type, handleGetSeriesById);
    yield takeLatest(updateSeries.type, handleUpdateSeries);
}

export default seriesSaga;
