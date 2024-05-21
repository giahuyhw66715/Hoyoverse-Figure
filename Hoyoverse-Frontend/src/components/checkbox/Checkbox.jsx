import PropTypes from "prop-types";

const Checkbox = ({ name, register, ...rest }) => {
    return (
        <input
            type="checkbox"
            className="w-4 h-4"
            {...register(name)}
            {...rest}
        />
    );
};

Checkbox.propTypes = {
    name: PropTypes.string,
    register: PropTypes.any,
};

export default Checkbox;
