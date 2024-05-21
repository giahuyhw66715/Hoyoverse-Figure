import { axiosPrivate } from "../../config/API";

const requestCategoryList = (params) => {
    return axiosPrivate.get("/categories", {
        params,
    });
};

const requestAddNewCategory = (data) => {
    return axiosPrivate.post("/categories", data);
};

const requestDeleteCategory = (id) => {
    return axiosPrivate.delete(`/categories/${id}`);
};

const requestGetCategoryById = (id) => {
    return axiosPrivate.get(`/categories/${id}`);
};

const requestUpdateCategory = (category) => {
    return axiosPrivate.put(`/categories/${category.id}`, category);
};

export {
    requestCategoryList,
    requestAddNewCategory,
    requestDeleteCategory,
    requestGetCategoryById,
    requestUpdateCategory,
};
