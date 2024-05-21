import { takeLatest } from "redux-saga/effects";
import { deleteUser, getUser, getUserList, updateUser } from "./userSlice";
import {
    handleDeleteUser,
    handleGetUser,
    handleGetUserList,
    handleUpdateUser,
} from "./userHandlers";

function* userSaga() {
    yield takeLatest(getUserList.type, handleGetUserList);
    yield takeLatest(deleteUser.type, handleDeleteUser);
    yield takeLatest(getUser.type, handleGetUser);
    yield takeLatest(updateUser.type, handleUpdateUser);
}

export default userSaga;
