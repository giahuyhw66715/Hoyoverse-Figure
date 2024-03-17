import { useEffect } from "react";
import CardList from "../components/card/CardList";
import Heading from "../components/common/Heading";
import HomeBanner from "../modules/home/HomeBanner";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeries } from "../store/series/seriesSlice";
import { getAllFigures, resetFigures } from "../store/figure/figureSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const { series } = useSelector((state) => state.series);
    const { figures } = useSelector((state) => state.figure);

    useEffect(() => {
        document.title = "Home | Hoyoverse";
        dispatch(getAllSeries());
        dispatch(getAllFigures());

        return () => {
            dispatch(resetFigures());
        };
    }, [dispatch]);

    return (
        <div>
            <HomeBanner></HomeBanner>
            {series?.length > 0 &&
                series.map((seriesItem) => (
                    <div key={seriesItem?.id}>
                        <Heading>{seriesItem?.name}</Heading>
                        <CardList
                            figures={figures.filter(
                                (figure) =>
                                    figure?.series?.id === seriesItem?.id
                            )}
                        ></CardList>
                    </div>
                ))}
        </div>
    );
};

export default HomePage;
