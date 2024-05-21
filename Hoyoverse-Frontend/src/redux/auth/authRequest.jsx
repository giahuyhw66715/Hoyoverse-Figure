import { axiosPrivate, headers } from "../../config/API";

const requestRegisterUser = (data) => {
    return axiosPrivate.post("/auth/register", data);
};

const requestLoginUser = (data) => {
    return axiosPrivate.post("/auth/login", data);
};

const requestRefreshToken = (refreshToken) => {
    // return axiosPrivate.post("/auth/refreshToken", null, {
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${refreshToken}`,
    //     },
    // });
    return axiosPrivate.post("/auth/refreshToken", null, headers(refreshToken));
};

const requestFetchMe = (params) => {
    if (!params) return;
    return axiosPrivate.get("/auth/me", {
        params,
    });
};

export {
    requestRegisterUser,
    requestLoginUser,
    requestRefreshToken,
    requestFetchMe,
};
