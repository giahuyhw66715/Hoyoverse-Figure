import { useEffect } from "react";
import CardList from "../components/card/CardList";
import Heading from "../components/common/Heading";
import HomeBanner from "../modules/home/HomeBanner";
import Dropdown from "../components/dropdown/Dropdown";
import DropdownSelect from "../components/dropdown/DropdownSelect";
import DropdownList from "../components/dropdown/DropdownList";
import DropdownOption from "../components/dropdown/DropdownOption";

const HomePage = () => {
    useEffect(() => {
        document.title = "Home | Hoyoverse";
    }, []);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Heading>Honkai Star Rail</Heading>
            <CardList></CardList>
            <Heading>Genshin Impact</Heading>
            <CardList></CardList>
        </div>
    );
};

export default HomePage;
