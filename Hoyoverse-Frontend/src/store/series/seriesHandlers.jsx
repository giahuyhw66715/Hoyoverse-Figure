import { call, put } from "redux-saga/effects";
import { requestAddSeries, requestAllSeries } from "./seriesRequest";
import { setSeries } from "./seriesSlice";
import { toast } from "react-toastify";
import { seriesInitialState } from "../initialState";

function* handleAddSeries({ payload }) {
    try {
        yield call(requestAddSeries, payload);
        toast.success("Add new series successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

function* handleGetAllSeries({ payload }) {
    if (payload === undefined) payload = seriesInitialState;
    try {
        const response = yield call(requestAllSeries, payload);
        yield put(setSeries(response.data?.content));
    } catch (error) {
        console.log(error);
    }
}

export { handleAddSeries, handleGetAllSeries };
