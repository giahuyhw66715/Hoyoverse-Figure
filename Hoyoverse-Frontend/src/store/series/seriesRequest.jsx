import axios from "axios";
import { API } from "../../config/API";

const requestAllSeries = () => {
    return axios.get(API.getAllSeries);
};

export { requestAllSeries };
