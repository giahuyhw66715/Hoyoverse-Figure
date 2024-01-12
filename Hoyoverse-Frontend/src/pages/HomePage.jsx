import { useEffect } from "react";
import CardList from "../components/card/CardList";
import Heading from "../components/common/Heading";
import HomeBanner from "../modules/home/HomeBanner";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeries } from "../store/series/seriesSlice";
import { getAllFigures } from "../store/figure/figureSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSeries());
        dispatch(getAllFigures());
        document.title = "Home | Hoyoverse";
    }, [dispatch]);
    const { series } = useSelector((state) => state.series);
    return (
        <div>
            <HomeBanner></HomeBanner>
            {series?.length > 0 &&
                series.map((seriesItem) => (
                    <div key={seriesItem?.id}>
                        <Heading>{seriesItem?.name}</Heading>
                        <CardList></CardList>
                    </div>
                ))}
        </div>
    );
};

export default HomePage;
