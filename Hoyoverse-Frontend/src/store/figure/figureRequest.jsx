import axios from "axios";
import { API } from "../../config/API";

const requestAddFigure = (data) => {
    return axios.post(API.figure, data);
};

const requestGetAllFigures = (data) => {
    return axios.get(API.figure, {
        params: data,
    });
};

const requestUploadImageToCloud = (data) => {
    return axios.post(API.imgbb, data);
};

export { requestAddFigure, requestGetAllFigures, requestUploadImageToCloud };
