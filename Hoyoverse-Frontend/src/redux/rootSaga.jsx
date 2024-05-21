import { all, fork } from "redux-saga/effects";
import figureSaga from "./figure/figureSaga";
import categorySaga from "./category/categorySaga";
import seriesSaga from "./series/seriesSaga";
import authSaga from "./auth/authSaga";
import manufacturerSaga from "./manufacturer/manufacturerSaga";
import cartSaga from "./cart/cartSaga";
import orderSaga from "./order/orderSaga";
import userSaga from "./user/userSaga";

export default function* rootSaga() {
    yield all([
        fork(figureSaga),
        fork(categorySaga),
        fork(seriesSaga),
        fork(authSaga),
        fork(manufacturerSaga),
        fork(cartSaga),
        fork(orderSaga),
        fork(userSaga),
    ]);
}
