import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const FigurePage = () => {
    useEffect(() => {
        document.title = "Figure - HoYoverse";
    }, []);
    return (
        <div className="container">
            <Outlet></Outlet>
        </div>
    );
};

export default FigurePage;
