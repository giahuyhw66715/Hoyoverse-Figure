import PropTypes from "prop-types";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getFigureList } from "../../redux/figure/figureSlice";

const Pagination = () => {
    const { currentPage, totalPages, pageLimit, request } = useSelector(
        (state) => state.figure
    );
    const dispatch = useDispatch();

    const handlePagination = (index) => {
        if (currentPage < totalPages) {
            window.scrollTo(0, 0);
            dispatch(
                getFigureList({
                    ...request,
                    page: index,
                    limit: pageLimit,
                })
            );
        }
    };

    return (
        <div className="flex items-center justify-center mt-10 gap-x-5">
            {Array(totalPages)
                .fill(0)
                .map((_, i) => {
                    return (
                        <Button
                            key={i}
                            className="px-4 py-2 rounded-md"
                            onClick={() => handlePagination(i)}
                            color={i === currentPage ? "primary" : "black"}
                        >
                            {i + 1}
                        </Button>
                    );
                })}
        </div>
    );
};

Pagination.propTypes = {
    request: PropTypes.object,
};

export default Pagination;
