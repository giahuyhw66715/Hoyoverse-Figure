import { axiosPrivate } from "../../config/API";

const requestGetSeriesList = (params) => {
    return axiosPrivate.get("/series", {
        params,
    });
};

const requestAddNewSeries = (data) => {
    return axiosPrivate.post("/series", data);
};

const requestDeleteSeries = (id) => {
    return axiosPrivate.delete(`/series/${id}`);
};

const requestGetSeriesById = (id) => {
    return axiosPrivate.get(`/series/${id}`);
};

const requestUpdateSeries = (series) => {
    return axiosPrivate.put(`/series/${series.id}`, series);
};

export {
    requestGetSeriesList,
    requestAddNewSeries,
    requestDeleteSeries,
    requestGetSeriesById,
    requestUpdateSeries,
};
