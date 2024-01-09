import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ManagementLayout from "./layout/ManagementLayout";
import FigureManagement from "./modules/figure/FigureManagement";
import CategoryManagement from "./modules/category/CategoryManagement";
import SeriesManagement from "./modules/series/SeriesManagement";
import UserManagement from "./modules/user/UserManagement";
import FigurePage from "./pages/FigurePage";
import FigureAddNew from "./modules/figure/FigureAddNew";
import CategoryAddNew from "./modules/category/CategoryAddNew";
import SeriesAddNew from "./modules/series/SeriesAddNew";

const App = () => {
    return (
        <Suspense>
            <Routes>
                <Route element={<MainLayout></MainLayout>}>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route
                        path="/figures"
                        element={<FigurePage></FigurePage>}
                    ></Route>
                    <Route element={<ManagementLayout></ManagementLayout>}>
                        <Route
                            path="/management/figures"
                            element={<FigureManagement></FigureManagement>}
                        ></Route>
                        <Route
                            path="/management/add-figure"
                            element={<FigureAddNew></FigureAddNew>}
                        ></Route>
                        <Route
                            path="/management/category"
                            element={<CategoryManagement></CategoryManagement>}
                        ></Route>
                        <Route
                            path="/management/add-category"
                            element={<CategoryAddNew></CategoryAddNew>}
                        ></Route>
                        <Route
                            path="/management/series"
                            element={<SeriesManagement></SeriesManagement>}
                        ></Route>
                        <Route
                            path="/management/add-series"
                            element={<SeriesAddNew></SeriesAddNew>}
                        ></Route>
                        <Route
                            path="/management/user"
                            element={<UserManagement></UserManagement>}
                        ></Route>
                    </Route>
                </Route>
                {/* <Route
                    path="/register"
                    element={<SignUpPage></SignUpPage>}
                ></Route>
                <Route
                    path="/login"
                    element={<SignInPage></SignInPage>}
                ></Route> */}
            </Routes>
        </Suspense>
    );
};

export default App;
