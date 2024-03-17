import axios from "axios";
import { API } from "../../config/API";

const requestAddSeries = (data) => {
    return axios.post(API.series, data);
};

const requestAllSeries = (data) => {
    return axios.get(API.series, {
        params: data,
    });
};

export { requestAddSeries, requestAllSeries };
