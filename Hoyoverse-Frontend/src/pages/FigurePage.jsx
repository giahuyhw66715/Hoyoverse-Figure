import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/card/CardList";
import Heading from "../components/common/Heading";
import { useCallback, useEffect } from "react";
import { getAllFigures } from "../store/figure/figureSlice";
import Filter from "../components/filter/Filter";
import { useParams } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";

const FigurePage = () => {
    const dispatch = useDispatch();
    const { figures, limit, totalPages } = useSelector((state) => state.figure);

    const { requestName, requestValue } = useParams();

    const handleLoadFigures = useCallback(
        (currentPage) => {
            switch (requestName) {
                case "categories":
                    dispatch(
                        getAllFigures({
                            category_id: requestValue.split("-").at(-1),
                            page: currentPage,
                            limit,
                        })
                    );
                    break;
                case "series":
                    dispatch(
                        getAllFigures({
                            series_id: requestValue.split("-").at(-1),
                            page: currentPage,
                            limit,
                        })
                    );
                    break;
                case "figures":
                    dispatch(
                        getAllFigures({
                            page: currentPage,
                            limit,
                        })
                    );
                    break;
                default:
                    break;
            }
        },
        [dispatch, limit, requestName, requestValue]
    );

    useEffect(() => {
        handleLoadFigures(0);
    }, [handleLoadFigures, requestName]);

    return (
        <div className="container">
            <Heading className="m-0 text-left text-black mb-9">
                All Figures
            </Heading>
            <Filter></Filter>
            <CardList figures={figures}></CardList>
            <Pagination
                totalPages={totalPages}
                handleGetData={handleLoadFigures}
            ></Pagination>
        </div>
    );
};

export default FigurePage;
