import { call } from "redux-saga/effects";
import {
    requestUploadFigureImage,
    requestUploadImageToCloud,
} from "./imageRequest";
import { toast } from "react-toastify";

function* handleUploadImage({ payload }) {
    if (payload.images.length > 5) {
        toast.error("You can only upload up to 5 images");
        return;
    }
    try {
        for (let i = 0; i < payload.images.length; i++) {
            const bodyFormData = new FormData();
            bodyFormData.append("image", payload.images[i]);
            const response = yield call(
                requestUploadImageToCloud,
                bodyFormData
            );
            const requestData = {
                figure: payload.figure,
                url: response?.data?.data?.url,
            };
            yield call(requestUploadFigureImage, requestData);
        }
        toast.success("Upload images successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

export { handleUploadImage };
