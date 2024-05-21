import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/card/CardList";
import Heading from "../components/heading/Heading";
import HomeBanner from "../modules/home/HomeBanner";
import { useEffect } from "react";
import {
    getGenshinFigureList,
    getHonkaiFigureList,
} from "../redux/figure/figureSlice";
import {
    DEFAULT_PAGE_NUMBER,
    DEFAULT_SORT_BY,
    DEFAULT_SORT_DIR,
} from "../utils/constants";
import Button from "../components/button/Button";
import HomePolicy from "../modules/home/HomePolicy";
import HomeContact from "../modules/home/HomeContact";

const HomePage = () => {
    const dispatch = useDispatch();

    const { seriesList } = useSelector((state) => state.series);
    const { genshinFigureList, honkaiFigureList } = useSelector(
        (state) => state.figure
    );

    useEffect(() => {
        document.title = "Home | Hoyoverse";
    }, []);

    useEffect(() => {
        seriesList.forEach((series) => {
            if (series.name.toLowerCase() === "genshin impact") {
                dispatch(
                    getGenshinFigureList({
                        page: DEFAULT_PAGE_NUMBER,
                        limit: 8,
                        sortBy: DEFAULT_SORT_BY,
                        sortDir: DEFAULT_SORT_DIR,
                        series_id: series?.id,
                    })
                );
            }

            if (series.name.toLowerCase() === "honkai star rail") {
                dispatch(
                    getHonkaiFigureList({
                        page: DEFAULT_PAGE_NUMBER,
                        limit: 8,
                        sortBy: DEFAULT_SORT_BY,
                        sortDir: DEFAULT_SORT_DIR,
                        series_id: series?.id,
                    })
                );
            }
        });
    }, [dispatch, seriesList]);

    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="container">
                {genshinFigureList?.length > 0 && (
                    <>
                        <Heading className="text-center">
                            Genshin Impact
                        </Heading>
                        <CardList list={genshinFigureList}></CardList>
                        <div className="text-center mt-14">
                            <Button
                                color={"secondary"}
                                url={`/series/genshin-impact-${
                                    seriesList.filter(
                                        (series) =>
                                            series.name.toLowerCase() ===
                                            "genshin impact"
                                    )[0]?.id
                                }`}
                            >
                                Discover More
                            </Button>
                        </div>
                    </>
                )}
                {honkaiFigureList?.length > 0 && (
                    <>
                        <Heading className="text-center">
                            Honkai Star Rail
                        </Heading>
                        <CardList list={honkaiFigureList}></CardList>
                        <div className="text-center mt-14">
                            <Button
                                color={"secondary"}
                                url={`/series/honkai-star-rail-${
                                    seriesList.filter(
                                        (series) =>
                                            series.name.toLowerCase() ===
                                            "honkai star rail"
                                    )[0]?.id
                                }`}
                            >
                                Discover More
                            </Button>
                        </div>
                    </>
                )}
            </div>
            <div className="mt-32">
                <HomePolicy></HomePolicy>
            </div>
            <div className="mt-32">
                <HomeContact></HomeContact>
            </div>
        </div>
    );
};

export default HomePage;
