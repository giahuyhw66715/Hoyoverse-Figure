import { call, put } from "redux-saga/effects";
import {
    requestAddNewSeries,
    requestDeleteSeries,
    requestGetSeriesById,
    requestGetSeriesList,
    requestUpdateSeries,
} from "./seriesRequest";
import { setSeries, setSeriesList } from "./seriesSlice";

function* handleGetSeriesList({ payload }) {
    try {
        const response = yield call(requestGetSeriesList, payload);
        yield put(setSeriesList(response.data?.content));
    } catch (error) {
        console.log(error);
    }
}

function* handleAddNewSeries({ payload }) {
    try {
        yield call(requestAddNewSeries, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteSeries({ payload }) {
    try {
        yield call(requestDeleteSeries, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleGetSeriesById({ payload }) {
    try {
        const response = yield call(requestGetSeriesById, payload);
        yield put(setSeries(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleUpdateSeries({ payload }) {
    try {
        yield call(requestUpdateSeries, payload);
    } catch (error) {
        console.log(error);
    }
}

export {
    handleGetSeriesList,
    handleAddNewSeries,
    handleDeleteSeries,
    handleGetSeriesById,
    handleUpdateSeries,
};
