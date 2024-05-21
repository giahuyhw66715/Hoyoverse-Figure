import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import FigurePage from "./pages/FigurePage";
import CategoryFigure from "./modules/figure/CategoryFigure";
import SeriesFigure from "./modules/figure/SeriesFigure";
import AllFigure from "./modules/figure/AllFigure";
import FigureDetailPage from "./pages/FigureDetailPage";
import Modal from "react-modal";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ScrollToTop from "./hooks/useScrollToTop";
import CartPage from "./pages/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "./redux/auth/authSlice";
import { getToken, logOut } from "./utils/auth";
import { getCartByUser } from "./redux/cart/CartSlice";
import OrderPage from "./pages/OrderPage";
import SearchFigure from "./modules/figure/SearchFigure";
import AdminPage from "./pages/AdminPage";
import FigureAdmin from "./modules/figure/FigureAdmin";
import CategoryAdmin from "./modules/category/CategoryAdmin";
import SeriesAdmin from "./modules/series/SeriesAdmin";
import UserAdmin from "./modules/user/UserAdmin";
import FigureAddNew from "./modules/figure/FigureAddNew";
import ManufacturerAdmin from "./modules/manufacturer/ManufacturerAdmin";
import ManufacturerAddNew from "./modules/manufacturer/ManufacturerAddNew";
import SeriesAddNew from "./modules/series/SeriesAddNew";
import CategoryAddNew from "./modules/category/CategoryAddNew";
import OrderAdmin from "./modules/order/OrderAdmin";
import CategoryUpdate from "./modules/category/CategoryUpdate";
import ManufacturerUpdate from "./modules/manufacturer/ManufacturerUpdate";
import SeriesUpdate from "./modules/series/SeriesUpdate";
import FigureUpdate from "./modules/figure/FigureUpdate";
import UserUpdate from "./modules/user/UserUpdate";
import UserProfile from "./modules/user/UserProfile";
import AboutPage from "./pages/AboutPage";
import OrderDetails from "./modules/order/OrderDetails";
Modal.setAppElement("#root");

const App = () => {
    ScrollToTop();

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { accessToken, refreshToken } = getToken();

    useEffect(() => {
        if (user) {
            dispatch(authUpdateUser({ user, accessToken }));
            dispatch(getCartByUser({ user_id: user?.id }));
        } else {
            if (refreshToken) {
                dispatch(authRefreshToken(refreshToken));
            } else {
                dispatch(
                    authUpdateUser({
                        user: undefined,
                        accessToken: null,
                    })
                );
                logOut();
            }
        }
    }, [accessToken, dispatch, refreshToken, user]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (accessToken && refreshToken) {
                dispatch(authRefreshToken(refreshToken));
            }
        }, 180000);
        return () => {
            clearInterval(interval);
        };
    }, [accessToken, dispatch, refreshToken]);

    return (
        <Suspense>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route element={<FigurePage />}>
                        <Route
                            path="category/:category"
                            element={<CategoryFigure />}
                        ></Route>
                        <Route
                            path="series/:series"
                            element={<SeriesFigure />}
                        ></Route>
                        <Route path="figures" element={<AllFigure />}></Route>
                        <Route
                            path="figures/:requestFigure"
                            element={<FigureDetailPage />}
                        ></Route>
                        <Route
                            path="figures/search/:title"
                            element={<SearchFigure />}
                        ></Route>
                    </Route>
                    <Route path="cart" element={<CartPage />}></Route>
                    <Route path="orders" element={<OrderPage />}></Route>
                    <Route path="orders/:id" element={<OrderDetails />}></Route>
                    <Route path="about" element={<AboutPage />}></Route>
                    <Route path="admin" element={<AdminPage />}>
                        <Route path="figures" element={<FigureAdmin />}></Route>
                        <Route
                            path="figures/add-figure"
                            element={<FigureAddNew />}
                        ></Route>
                        <Route
                            path="figures/edit-figure/:id"
                            element={<FigureUpdate />}
                        ></Route>
                        <Route
                            path="manufacturers"
                            element={<ManufacturerAdmin />}
                        ></Route>
                        <Route
                            path="manufacturers/add-manufacturer"
                            element={<ManufacturerAddNew />}
                        ></Route>
                        <Route
                            path="manufacturers/edit-manufacturer/:id"
                            element={<ManufacturerUpdate />}
                        ></Route>
                        <Route
                            path="categories"
                            element={<CategoryAdmin />}
                        ></Route>
                        <Route
                            path="categories/add-category"
                            element={<CategoryAddNew />}
                        ></Route>
                        <Route
                            path="categories/edit-category/:id"
                            element={<CategoryUpdate />}
                        ></Route>
                        <Route path="series" element={<SeriesAdmin />}></Route>
                        <Route
                            path="series/add-series"
                            element={<SeriesAddNew />}
                        ></Route>
                        <Route
                            path="series/edit-series/:id"
                            element={<SeriesUpdate />}
                        ></Route>
                        <Route path="users" element={<UserAdmin />}></Route>
                        <Route
                            path="users/edit-user/:id"
                            element={<UserUpdate />}
                        ></Route>
                        <Route path="orders" element={<OrderAdmin />}></Route>
                    </Route>
                    <Route
                        path="users/profile/:id"
                        element={<UserProfile />}
                    ></Route>
                </Route>
                <Route path="/sign-in" element={<SignInPage />}></Route>
                <Route path="/sign-up" element={<SignUpPage />}></Route>
            </Routes>
        </Suspense>
    );
};

export default App;
