import { all, fork } from "redux-saga/effects";
import categorySaga from "./category/categorySaga";
import seriesSaga from "./series/seriesSaga";
import figureSaga from "./figure/figureSaga";
import imageSaga from "./image/imageSaga";

export default function* rootSaga() {
    yield all([
        fork(categorySaga),
        fork(seriesSaga),
        fork(figureSaga),
        fork(imageSaga),
    ]);
}
