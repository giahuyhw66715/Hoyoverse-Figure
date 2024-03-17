import axios from "axios";
import { API } from "../../config/API";

const requestAddBrand = (data) => {
    return axios.post(API.brand, data);
};

const requestAllBrands = (data) => {
    return axios.get(API.brand, {
        params: data,
    });
};

export { requestAddBrand, requestAllBrands };
