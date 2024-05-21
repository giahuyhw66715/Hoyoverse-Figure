import { call, put } from "redux-saga/effects";
import {
    requestDeleteUser,
    requestGetUser,
    requestGetUserList,
    requestUpdateUser,
} from "./userRequest";
import { setUser, setUserList } from "./userSlice";

function* handleGetUserList({ payload }) {
    try {
        const response = yield call(requestGetUserList, payload);
        yield put(setUserList(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteUser({ payload }) {
    try {
        yield call(requestDeleteUser, payload);
    } catch (error) {
        console.log(error);
    }
}

function* handleGetUser({ payload }) {
    try {
        const response = yield call(requestGetUser, payload);
        yield put(setUser(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* handleUpdateUser({ payload }) {
    try {
        yield call(requestUpdateUser, payload);
    } catch (error) {
        console.log(error);
    }
}

export { handleGetUserList, handleDeleteUser, handleGetUser, handleUpdateUser };
