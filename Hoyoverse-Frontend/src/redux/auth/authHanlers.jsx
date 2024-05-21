import { call, put } from "redux-saga/effects";
import {
    requestFetchMe,
    requestLoginUser,
    requestRefreshToken,
    requestRegisterUser,
} from "./authRequest";
import { toast } from "react-toastify";
import { logOut, saveToken } from "../../utils/auth";
import { authUpdateUser } from "./authSlice";

function* handleRegisterUser({ payload }) {
    try {
        const response = yield call(requestRegisterUser, payload);
        if (response?.data?.access_token && response?.data?.refresh_token) {
            saveToken(response.data.access_token, response.data.refresh_token);
            yield handleFetchMe({
                payload: {
                    accessToken: response.data.access_token,
                },
            });
        }
        toast.success("Create account successfully");
    } catch (error) {
        console.log(error);
        toast.error("Cannot register account!");
    }
}

function* handleLoginUser({ payload }) {
    try {
        const response = yield call(requestLoginUser, payload);
        if (response?.data?.access_token && response?.data?.refresh_token) {
            saveToken(response.data.access_token, response.data.refresh_token);
            yield handleFetchMe({
                payload: {
                    accessToken: response.data.access_token,
                },
            });
        }
        toast.success("Login successfully");
    } catch (error) {
        console.log(error);
        toast.error("Username or password is not correct");
    }
}

function* handleRefreshToken({ payload }) {
    try {
        const response = yield call(requestRefreshToken, payload);
        if (response.data) {
            saveToken(response.data.access_token, response.data.refresh_token);
            yield handleFetchMe({
                payload: {
                    accessToken: response.data.access_token,
                },
            });
        }
    } catch (error) {
        console.log(error);
    }
}

function* handleFetchMe({ payload }) {
    try {
        const response = yield call(requestFetchMe, payload);
        if (response.status === 200) {
            yield put(
                authUpdateUser({
                    user: response.data,
                    accessToken: payload.accessToken,
                })
            );
        }
    } catch (error) {
        console.log(error);
    }
}

function* handleLogout() {
    try {
        yield put(
            authUpdateUser({
                user: undefined,
                accessToken: null,
            })
        );
        logOut();
    } catch (error) {
        console.log(error);
    }
}

export {
    handleRegisterUser,
    handleLoginUser,
    handleRefreshToken,
    handleFetchMe,
    handleLogout,
};
