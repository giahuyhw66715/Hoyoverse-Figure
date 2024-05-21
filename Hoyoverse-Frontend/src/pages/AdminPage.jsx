import { useEffect } from "react";
import SidebarAdmin from "../components/sidebar/SidebarAdmin";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
    useEffect(() => {
        document.title = "Admin - HoYoverse";
    }, []);
    return (
        <div className="px-16 grid grid-cols-[300px_minmax(0,_1fr)] gap-x-10 items-start mt-10">
            <SidebarAdmin></SidebarAdmin>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminPage;
