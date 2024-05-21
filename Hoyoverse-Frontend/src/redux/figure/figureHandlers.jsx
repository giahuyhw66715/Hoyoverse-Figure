import { call, put } from "redux-saga/effects";
import {
    requestAddFigureImage,
    requestAddNewFigure,
    requestDeleteFigure,
    requestDeleteFigureImage,
    requestGetFigure,
    requestGetFigureList,
    requestUpdateFigure,
    requestUpdateFigureImage,
    requestUploadImageToCloud,
} from "./figureRequest";
import {
    setFigure,
    setFigureList,
    setGenshinFigureList,
    setHonkaiFigureList,
} from "./figureSlice";
import { toast } from "react-toastify";

function* handleGetFigureList({ payload }) {
    try {
        const response = yield call(requestGetFigureList, payload);
        yield put(
            setFigureList({
                figureList: response?.data?.content,
                totalPages: response?.data?.totalPages,
                currentPage: response?.data?.pageable?.pageNumber,
                pageLimit: response?.data?.pageable?.pageSize,
            })
        );
    } catch (error) {
        console.log(error);
    }
}

function* handleGetHonkaiFigure({ payload }) {
    try {
        const response = yield call(requestGetFigureList, payload);
        yield put(setHonkaiFigureList(response?.data?.content));
    } catch (error) {
        console.log(error);
    }
}

function* handleGetGenshinFigure({ payload }) {
    try {
        const response = yield call(requestGetFigureList, payload);
        yield put(setGenshinFigureList(response?.data?.content));
    } catch (error) {
        console.log(error);
    }
}

function* handleGetFigure({ payload }) {
    try {
        const response = yield call(requestGetFigure, payload);
        yield put(setFigure(response?.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleAddNewFigure({ payload }) {
    const { images, ...figure } = payload;
    const imageUrlList = [];
    try {
        for (let i = 0; i < images.length; i++) {
            const bodyFormData = new FormData();
            bodyFormData.append("image", images[i]);
            const response = yield call(
                requestUploadImageToCloud,
                bodyFormData
            );
            imageUrlList.push(response?.data?.data?.url);
        }
        const response = yield call(requestAddNewFigure, figure);
        yield call(requestAddFigureImage, {
            figure: response?.data,
            urls: imageUrlList,
        });
        toast.success("Add new figure successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

function* handleUpdateFigure({ payload }) {
    const { images, ...figure } = payload;
    const imageUrlList = [];
    try {
        if (images?.length > 0) {
            console.log("Running");
            for (let i = 0; i < images.length; i++) {
                const bodyFormData = new FormData();
                bodyFormData.append("image", images[i]);
                const response = yield call(
                    requestUploadImageToCloud,
                    bodyFormData
                );
                imageUrlList.push(response?.data?.data?.url);
            }
            const updatedImage = { ...figure.image, urls: imageUrlList };
            yield call(requestUpdateFigureImage, updatedImage);
        }
        yield call(requestUpdateFigure, figure);
        toast.success("Update figure successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

function* handleDeleteFigure({ payload }) {
    try {
        yield call(requestDeleteFigureImage, payload.imageId);
        yield call(requestDeleteFigure, payload.figureId);
    } catch (error) {
        console.log(error);
    }
}

export {
    handleGetFigureList,
    handleGetGenshinFigure,
    handleGetHonkaiFigure,
    handleGetFigure,
    handleAddNewFigure,
    handleDeleteFigure,
    handleUpdateFigure,
};
