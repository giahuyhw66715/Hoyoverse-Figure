import axios from "axios";
import { API } from "../../config/API";

const requestUploadImageToCloud = (bodyFormData) => {
    return axios({
        method: "post",
        url: API.imgbb,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

const requestUploadFigureImage = (data) => {
    console.log("🚀 ~ data:", data);
    return axios.post(API.addImages, data);
};

export { requestUploadImageToCloud, requestUploadFigureImage };
