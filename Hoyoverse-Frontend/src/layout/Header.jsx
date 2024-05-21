import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import { useSelector } from "react-redux";
import { logoUrl, role } from "../utils/constants";
import slugify from "slugify";
import CartIcon from "../components/icon/CartIcon";
import { v4 } from "uuid";
import UserAvatarIcon from "../components/icon/UserAvatarIcon";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import OrderIcon from "../components/icon/OrderIcon";

const Header = () => {
    const { categoryList } = useSelector((state) => state.category);
    const { seriesList } = useSelector((state) => state.series);
    const { user } = useSelector((state) => state.auth);

    const categoryOptions = categoryList?.map((category) => ({
        id: v4(),
        name: category.name,
        url: `/category/${slugify(category?.name, {
            lower: true,
        })}-${category?.id}`,
    }));
    const seriesOptions = seriesList?.map((series) => ({
        id: v4(),
        name: series.name,
        url: `/series/${slugify(series?.name, {
            lower: true,
        })}-${series?.id}`,
    }));
    const options = [
        {
            id: v4(),
            name: "All Figures",
            url: "/figures",
        },
        ...categoryOptions,
        ...seriesOptions,
    ];

    const { control, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const handleSearch = (values) => {
        navigate(`/figures/search/${values.search}`);
        reset();
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between w-full px-16 py-4 text-white bg-dark">
            <div className="flex items-center">
                <NavLink to="/">
                    <img
                        src={logoUrl}
                        alt="Logo"
                        className="object-cover w-64 h-full"
                    />
                </NavLink>
            </div>

            <nav className="flex items-center">
                <ul className="flex space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary"
                                    : "text-white hover:text-primary transition-all"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <Dropdown
                            name="figures"
                            title="Figures"
                            options={options}
                        ></Dropdown>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-primary">
                            About Us
                        </NavLink>
                    </li>
                    {user?.role === role.admin && (
                        <li>
                            <NavLink
                                to="/admin/figures"
                                className="hover:text-primary"
                            >
                                Management
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                <form onSubmit={handleSubmit(handleSearch)}>
                    <Input
                        className="py-2 text-black"
                        placeholder="Search"
                        control={control}
                        name="search"
                    ></Input>
                </form>
                <NavLink to="/cart" className="cursor-pointer">
                    <CartIcon></CartIcon>
                </NavLink>
                <NavLink
                    to={user ? `/users/profile/${user?.id}` : "/sign-in"}
                    className="cursor-pointer"
                >
                    <UserAvatarIcon></UserAvatarIcon>
                </NavLink>
                <NavLink to="/orders" className="cursor-pointer">
                    <OrderIcon></OrderIcon>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
