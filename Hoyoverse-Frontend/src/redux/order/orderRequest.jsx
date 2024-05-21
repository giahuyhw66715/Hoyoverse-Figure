import { axiosPrivate, headers } from "../../config/API";
import { getToken } from "../../utils/auth";

const requestCreateOrder = (data) => {
    const { accessToken } = getToken();
    return axiosPrivate.post("/orders", data, headers(accessToken));
};

const requestAddOrderItems = (data) => {
    const { accessToken } = getToken();
    return axiosPrivate.post("/order-items", data, headers(accessToken));
};

const requestGetMyOrders = (user_id) => {
    const { accessToken } = getToken();
    return axiosPrivate.get(`/users/${user_id}/orders`, headers(accessToken));
};

const requestGetAllOrders = () => {
    const { accessToken } = getToken();
    return axiosPrivate.get("/orders", headers(accessToken));
};

const requestDeleteOrder = (id) => {
    const { accessToken } = getToken();
    return axiosPrivate.delete(`/orders/${id}`, headers(accessToken));
};

const requestGetOrderById = (id) => {
    const { accessToken } = getToken();
    return axiosPrivate.get(`/orders/${id}`, headers(accessToken));
};

export {
    requestCreateOrder,
    requestAddOrderItems,
    requestGetMyOrders,
    requestGetAllOrders,
    requestDeleteOrder,
    requestGetOrderById,
};
