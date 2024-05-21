import PropTypes from "prop-types";
const SidebarItem = ({ children }) => {
    return <div className="flex flex-col gap-2">{children}</div>;
};

SidebarItem.propTypes = {
    children: PropTypes.node,
};

export default SidebarItem;
