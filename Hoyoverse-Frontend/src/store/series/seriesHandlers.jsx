import { call, put } from "redux-saga/effects";
import { requestAllSeries } from "./seriesRequest";
import { setSeries } from "./seriesSlice";

function* handleGetAllSeries() {
    try {
        const response = yield call(requestAllSeries);
        yield put(setSeries(response.data?.data));
    } catch (error) {
        console.log(error);
    }
}

export { handleGetAllSeries };
