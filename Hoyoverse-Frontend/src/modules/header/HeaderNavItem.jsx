import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const HeaderNavItem = ({ to, children }) => {
    const className =
        "font-medium transition-all duration-300 ease-in-out cursor-pointer group";
    if (to) {
        return (
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? className + " text-primary" : className
                }
            >
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary pb-1 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out group-hover:text-primary">
                    {children}
                </span>
            </NavLink>
        );
    }
    return (
        <div className={className}>
            <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary pb-1 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out group-hover:text-primary">
                {children}
            </span>
        </div>
    );
};

HeaderNavItem.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
};

export default HeaderNavItem;
