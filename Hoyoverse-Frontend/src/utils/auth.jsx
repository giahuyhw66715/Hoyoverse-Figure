import Cookies from "js-cookie";

const accessTokenKey = "access_token";
const refreshTokenKey = "refresh_token";
const objCookies = {
    expires: 7,
    domain: "localhost",
};

export const saveToken = (accessToken, refreshToken) => {
    if (accessToken && refreshToken) {
        Cookies.set(accessTokenKey, accessToken, objCookies);
        Cookies.set(refreshTokenKey, refreshToken, objCookies);
    } else {
        Cookies.remove(accessTokenKey, {
            ...objCookies,
            path: "/",
        });
        Cookies.remove(refreshTokenKey, {
            ...objCookies,
            path: "/",
        });
    }
};

export const getToken = () => {
    const accessToken = Cookies.get(accessTokenKey);
    const refreshToken = Cookies.get(refreshTokenKey);
    return { accessToken, refreshToken };
};

export const logOut = () => {
    const accessToken = Cookies.get(accessTokenKey);
    if (accessToken) {
        Cookies.remove(accessTokenKey, {
            ...objCookies,
            path: "/",
        });
        Cookies.remove(refreshTokenKey, {
            ...objCookies,
            path: "/",
        });
    }
};
