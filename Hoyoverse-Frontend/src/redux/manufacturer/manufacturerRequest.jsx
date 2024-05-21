import { axiosPrivate } from "../../config/API";

const requestGetManufacturerList = (params) => {
    return axiosPrivate.get("/manufacturers", {
        params,
    });
};

const requestAddNewManufacturer = (data) => {
    return axiosPrivate.post("/manufacturers", data);
};

const requestDeleteManufacturer = (id) => {
    return axiosPrivate.delete(`/manufacturers/${id}`);
};

const requestGetManufacturerById = (id) => {
    return axiosPrivate.get(`/manufacturers/${id}`);
};

const requestUpdateManufacturer = (manufacturer) => {
    return axiosPrivate.put(`/manufacturers/${manufacturer.id}`, manufacturer);
};

export {
    requestGetManufacturerList,
    requestAddNewManufacturer,
    requestDeleteManufacturer,
    requestGetManufacturerById,
    requestUpdateManufacturer,
};
