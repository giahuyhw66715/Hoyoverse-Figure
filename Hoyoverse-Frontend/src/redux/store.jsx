import createsagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import { reducer } from "./reducers";

const sagaMiddleware = createsagaMiddleware();

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false }).concat(
            sagaMiddleware
        );
    },
});

sagaMiddleware.run(rootSaga);

export default store;
