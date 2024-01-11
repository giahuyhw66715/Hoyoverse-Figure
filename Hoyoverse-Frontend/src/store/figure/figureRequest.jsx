import axios from "axios";
import { API } from "../../config/API";

const requestAddFigure = (data) => {
    return axios.post(API.addFigure, data);
};

const requestGetAllFigures = () => {
    return axios.get(API.getAllFigures);
};

export { requestAddFigure, requestGetAllFigures };
