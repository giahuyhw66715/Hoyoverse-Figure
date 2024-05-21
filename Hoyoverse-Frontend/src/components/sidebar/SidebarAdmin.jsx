import { NavLink } from "react-router-dom";
import OrderIcon from "../icon/OrderIcon";
import FigureIcon from "../icon/FigureIcon";
import ManufacturerIcon from "../icon/ManufacturerIcon";
import CategoryIcon from "../icon/CategoryIcon";
import SeriesIcon from "../icon/SeriesIcon";
import UserIcon from "../icon/UserIcon";

const sidebarLinks = [
    {
        title: "Figure",
        url: "/admin/figures",
        icon: <FigureIcon />,
    },
    {
        title: "Manufacturer",
        url: "/admin/manufacturers",
        icon: <ManufacturerIcon />,
    },
    {
        title: "Category",
        url: "/admin/categories",
        icon: <CategoryIcon />,
    },
    {
        title: "Series",
        url: "/admin/series",
        icon: <SeriesIcon />,
    },
    {
        title: "Order",
        url: "/admin/orders",
        icon: <OrderIcon />,
    },
    {
        title: "User",
        url: "/admin/users",
        icon: <UserIcon></UserIcon>,
    },
];

const SidebarAdmin = () => {
    const sidebarItemClassName =
        "flex items-center gap-5 px-5 py-4 font-medium rounded";
    return (
        <div className="flex flex-col gap-3 bg-white rounded-lg shadow-md">
            {sidebarLinks.map((item) => (
                <NavLink
                    to={item.url}
                    key={item.title}
                    className={({ isActive }) => {
                        return isActive
                            ? sidebarItemClassName + " bg-primary text-white"
                            : sidebarItemClassName + " text-grayDark";
                    }}
                >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default SidebarAdmin;
