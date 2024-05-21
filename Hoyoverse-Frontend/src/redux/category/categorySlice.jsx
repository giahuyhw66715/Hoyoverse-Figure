import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: [],
        category: {},
    },
    reducers: {
        getCategoryList() {},
        setCategoryList: (state, action) => {
            state.categoryList = action.payload;
        },
        addCategory: (state, action) => {
            state.categoryList = [...state.categoryList, action.payload];
        },
        deleteCategory: (state, action) => {
            state.categoryList = state.categoryList.filter(
                (category) => category.id !== action.payload
            );
        },
        getCategoryById() {},
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        updateCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const {
    getCategoryList,
    setCategoryList,
    addCategory,
    deleteCategory,
    getCategoryById,
    setCategory,
    updateCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
