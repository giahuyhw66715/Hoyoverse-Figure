// import axios from "axios";
import axios from "axios";
import { axiosPrivate } from "../../config/API";
import { IMAGE_API_KEY } from "../../utils/constants";

const requestGetFigureList = (params) => {
    return axiosPrivate.get("/figures", {
        params,
    });
};

const requestGetFigure = (id) => {
    return axiosPrivate.get(`/figures/${id}`);
};

const requestAddNewFigure = (data) => {
    return axiosPrivate.post("/figures", data);
};

const requestUploadImageToCloud = (image) => {
    return axios.post(`https://api.imgbb.com/1/upload`, image, {
        params: {
            key: IMAGE_API_KEY,
        },
    });
};

const requestAddFigureImage = (data) => {
    return axiosPrivate.post("/images", data);
};

const requestDeleteFigure = (id) => {
    return axiosPrivate.delete(`/figures/${id}`);
};

const requestDeleteFigureImage = (id) => {
    return axiosPrivate.delete(`/images/${id}`);
};

const requestUpdateFigure = (figure) => {
    return axiosPrivate.put(`/figures/${figure.id}`, figure);
};

const requestUpdateFigureImage = (image) => {
    return axiosPrivate.put(`/images/${image.id}`, image);
};

export {
    requestGetFigureList,
    requestGetFigure,
    requestAddFigureImage,
    requestAddNewFigure,
    requestUploadImageToCloud,
    requestDeleteFigure,
    requestDeleteFigureImage,
    requestUpdateFigure,
    requestUpdateFigureImage,
};
