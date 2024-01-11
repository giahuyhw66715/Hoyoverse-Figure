import { call, put } from "redux-saga/effects";
import { requestAddFigure, requestGetAllFigures } from "./figureRequest";
import { toast } from "react-toastify";
import { setFigures } from "./figureSlice";

function* handleAddFigure({ payload }) {
    try {
        yield call(requestAddFigure, payload);
        toast.success("Add new figure successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

function* handleGetAllFigures() {
    try {
        const response = yield call(requestGetAllFigures);
        yield put(setFigures(response.data?.data));
    } catch (error) {
        console.log(error);
    }
}

export { handleAddFigure, handleGetAllFigures };
