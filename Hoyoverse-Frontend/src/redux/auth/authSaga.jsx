import { takeLatest } from "redux-saga/effects";
import {
    authFetchMe,
    authLogin,
    authLogout,
    authRefreshToken,
    authRegister,
} from "./authSlice";
import {
    handleFetchMe,
    handleLoginUser,
    handleLogout,
    handleRefreshToken,
    handleRegisterUser,
} from "./authHanlers";

function* authSaga() {
    yield takeLatest(authRegister.type, handleRegisterUser);
    yield takeLatest(authLogin.type, handleLoginUser);
    yield takeLatest(authFetchMe.type, handleFetchMe);
    yield takeLatest(authRefreshToken.type, handleRefreshToken);
    yield takeLatest(authLogout.type, handleLogout);
}

export default authSaga;
