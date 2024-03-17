import axios from "axios";
import { API } from "../../config/API";

const requestAddCategory = (data) => {
    return axios.post(API.category, data);
};

const requestAllCategories = (data) => {
    return axios.get(API.category, {
        params: data,
    });
};

export { requestAddCategory, requestAllCategories };
