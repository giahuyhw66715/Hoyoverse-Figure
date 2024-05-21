import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropdown } from "../../redux/dropdown/dropdownSlice";
const Sidebar = ({ name, children }) => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(
        (state) => state.dropdowns[name] || false
    );

    return (
        <>
            <div
                className={`fixed inset-0 z-40 transition-opacity ${
                    isSidebarOpen
                        ? "opacity-50"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => dispatch(toggleDropdown(name))}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
            />
            <div
                className={`fixed inset-y-0 left-0 z-50 w-[450px] bg-white overflow-y-auto transition duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {children}
            </div>
        </>
    );
};

Sidebar.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
};

export default Sidebar;
