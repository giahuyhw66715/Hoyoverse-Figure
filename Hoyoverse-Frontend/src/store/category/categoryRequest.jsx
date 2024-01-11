import axios from "axios";
import { API } from "../../config/API";

export const requestAllCategories = () => {
    return axios.get(API.getAllCategories);
};
