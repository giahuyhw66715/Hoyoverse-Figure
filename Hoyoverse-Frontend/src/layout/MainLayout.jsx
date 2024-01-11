import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div className="relative grid grid-rows-[1fr_auto] min-h-screen">
            <Header></Header>
            <div className="display-content">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
