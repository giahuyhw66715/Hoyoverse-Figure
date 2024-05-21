import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoryList } from "../redux/category/categorySlice";
import { getSeriesList } from "../redux/series/seriesSlice";

const MainLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryList());
        dispatch(getSeriesList());
    }, [dispatch]);

    return (
        <div className="relative grid grid-rows-[1fr_auto] min-h-screen">
            <Header></Header>
            <div className="py-24">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
