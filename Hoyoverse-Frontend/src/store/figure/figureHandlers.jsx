import { call, put } from "redux-saga/effects";
import {
    requestAddFigure,
    requestGetAllFigures,
    requestUploadImageToCloud,
} from "./figureRequest";
import { toast } from "react-toastify";
import { setFigures } from "./figureSlice";
import { figureInitialState } from "../initialState";

function* handleAddFigure({ payload }) {
    if (payload.images.length > 5) {
        toast.error("You can only upload up to 5 images");
        return;
    }
    const images = [];
    try {
        for (let i = 0; i < payload.images.length; i++) {
            const bodyFormData = new FormData();
            bodyFormData.append("image", payload.images[i]);
            const response = yield call(
                requestUploadImageToCloud,
                bodyFormData
            );
            images.push({ url: response?.data?.data?.url });
        }
        yield call(requestAddFigure, { ...payload, images });
        toast.success("Add new figure successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

function* handleGetAllFigures({ payload }) {
    if (payload === undefined) payload = figureInitialState;
    try {
        const response = yield call(requestGetAllFigures, payload);
        console.log("Page number: ", response?.data?.pageable?.pageNumber);
        yield put(
            setFigures({
                figures: response?.data?.content,
                page: response?.data?.pageable?.pageNumber,
                limit: response?.data?.pageable?.pageSize,
                totalPages: response?.data?.totalPages,
            })
        );
    } catch (error) {
        console.log(error);
    }
}

export { handleAddFigure, handleGetAllFigures };
