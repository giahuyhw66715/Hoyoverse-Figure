import CardItem from "../components/card/CardItem";
import CardList from "../components/card/CardList";
import Heading from "../components/common/Heading";
import Dropdown from "../components/dropdown/Dropdown";
import DropdownList from "../components/dropdown/DropdownList";
import DropdownOption from "../components/dropdown/DropdownOption";
import DropdownSelect from "../components/dropdown/DropdownSelect";

const FigurePage = () => {
    return (
        <div className="container">
            <div className="flex items-center justify-between mb-9">
                <Heading className="m-0 text-left text-black">
                    All Figures
                </Heading>
                <div className="flex items-center gap-x-3">
                    <span className="cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                            />
                        </svg>
                    </span>
                    {/* <Dropdown>
                        <DropdownSelect title="Sort By" dark></DropdownSelect>
                        <DropdownList>
                            <DropdownOption>Newest</DropdownOption>
                            <DropdownOption>Price: Low-High</DropdownOption>
                            <DropdownOption>Price: Low-High</DropdownOption>
                        </DropdownList>
                    </Dropdown> */}
                </div>
            </div>
            <CardList>
                <CardItem></CardItem>
            </CardList>
        </div>
    );
};

export default FigurePage;
