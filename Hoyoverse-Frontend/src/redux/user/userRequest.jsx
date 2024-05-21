import { axiosPrivate } from "../../config/API";

const requestGetUserList = (params) => {
    return axiosPrivate.get("/users", {
        params,
    });
};

const requestDeleteUser = (id) => {
    return axiosPrivate.delete(`/users/${id}`);
};

const requestGetUser = (id) => {
    return axiosPrivate.get(`/users/${id}`);
};

const requestUpdateUser = (user) => {
    return axiosPrivate.put(`/users/${user.id}`, user);
};

export {
    requestGetUserList,
    requestDeleteUser,
    requestGetUser,
    requestUpdateUser,
};
