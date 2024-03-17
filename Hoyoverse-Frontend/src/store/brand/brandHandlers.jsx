import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { requestAddBrand, requestAllBrands } from "./brandRequest";
import { setBrands } from "./brandSlice";
import { brandInitialState } from "../initialState";

function* handleAddBrand({ payload }) {
    try {
        yield call(requestAddBrand, payload);
        toast.success("Add new brand successfully");
    } catch (error) {
        toast.error("Something went wrong");
    }
}

function* handleGetAllBrands({ payload }) {
    if (payload === undefined) payload = brandInitialState;
    try {
        const response = yield call(requestAllBrands, payload);
        yield put(setBrands(response.data?.content));
    } catch (error) {
        console.log(error);
    }
}

export { handleGetAllBrands, handleAddBrand };
