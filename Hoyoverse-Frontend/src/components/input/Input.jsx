import PropTypes from "prop-types";
const Input = ({ children }) => {
    return (
        <div className="relative">
            <input
                type="text"
                className="ps-3 pe-16 py-2 h-full text-black min-w-[300px] text-sm rounded-lg"
                placeholder="Search"
            />
            {children}
        </div>
    );
};

Input.propTypes = {
    children: PropTypes.node,
};

export default Input;
