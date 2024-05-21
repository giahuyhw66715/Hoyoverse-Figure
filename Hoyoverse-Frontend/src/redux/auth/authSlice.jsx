import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: undefined,
        accessToken: null,
    },
    reducers: {
        authRegister: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        authLogin: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        authUpdateUser: (state, action) => ({
            ...state,
            user: action.payload.user,
            accessToken: action.payload.accessToken,
        }),
        authFetchMe: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        authRefreshToken() {},
        authLogout() {},
    },
});

export const {
    authRegister,
    authUpdateUser,
    authLogin,
    authFetchMe,
    authRefreshToken,
    authLogout,
} = authSlice.actions;
export default authSlice.reducer;
