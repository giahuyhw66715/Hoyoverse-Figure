import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/sidebar/SidebarAdmin";

const ManagementLayout = () => {
    return (
        <div className="px-16 header-spacing grid grid-cols-[300px_minmax(0,_1fr)] gap-x-10">
            <SidebarAdmin></SidebarAdmin>
            <Outlet></Outlet>
        </div>
    );
};

export default ManagementLayout;