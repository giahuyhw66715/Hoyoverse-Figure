import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userList: [],
        user: {},
    },
    reducers: {
        getUserList() {},
        setUserList: (state, action) => {
            state.userList = action.payload;
        },
        deleteUser: (state, action) => {
            state.userList = state.userList.filter(
                (user) => user.id !== action.payload
            );
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        getUser() {},
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {
    getUserList,
    setUserList,
    deleteUser,
    getUser,
    setUser,
    updateUser,
} = userSlice.actions;
export default userSlice.reducer;
