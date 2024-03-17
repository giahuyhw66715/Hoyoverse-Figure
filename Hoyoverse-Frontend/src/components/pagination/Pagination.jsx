import PropTypes from "prop-types";
import Button from "../button/Button";
import { useSelector } from "react-redux";

const Pagination = ({ handleGetData = () => {}, totalPages }) => {
    const { page } = useSelector((state) => state.figure);

    return (
        <div className="flex items-center justify-center mt-10 gap-x-5">
            {Array(totalPages)
                .fill(0)
                .map((_, i) => {
                    return (
                        <Button
                            key={i}
                            className="px-4 py-2 rounded-md"
                            onClick={() => handleGetData(i)}
                            color={i === page ? "primary" : "black"}
                        >
                            {i + 1}
                        </Button>
                    );
                })}
        </div>
    );
};

Pagination.propTypes = {
    handleGetData: PropTypes.func,
    totalPages: PropTypes.number,
};

export default Pagination;
