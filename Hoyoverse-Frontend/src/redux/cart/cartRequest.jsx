import { axiosPrivate, headers } from "../../config/API";
import { getToken } from "../../utils/auth";

const requestAddToCart = (data) => {
    const { accessToken } = getToken();
    return axiosPrivate.post("/cart-items", data, headers(accessToken));
};

const requestGetCartByUser = (params) => {
    const { accessToken } = getToken();
    return axiosPrivate.get("/cart", {
        params,
        ...headers(accessToken),
    });
};

const requestUpdateCartItem = (data) => {
    const { accessToken } = getToken();
    return axiosPrivate.put(`/cart-items`, data, headers(accessToken));
};

const requestDeleteCartItem = (params) => {
    const { accessToken } = getToken();
    return axiosPrivate.delete(`/cart-items`, {
        params,
        ...headers(accessToken),
    });
};

const requestClearCart = (params) => {
    const { accessToken } = getToken();
    return axiosPrivate.delete(`/cart-items`, {
        params,
        ...headers(accessToken),
    });
};

export {
    requestAddToCart,
    requestGetCartByUser,
    requestUpdateCartItem,
    requestDeleteCartItem,
    requestClearCart,
};
