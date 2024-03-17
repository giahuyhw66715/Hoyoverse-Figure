import { all, fork } from "redux-saga/effects";
import categorySaga from "./category/categorySaga";
import seriesSaga from "./series/seriesSaga";
import figureSaga from "./figure/figureSaga";
import brandSaga from "./brand/brandSaga";

export default function* rootSaga() {
    yield all([
        fork(brandSaga),
        fork(categorySaga),
        fork(seriesSaga),
        fork(figureSaga),
    ]);
}
