import HeaderNavItem from "./HeaderNavItem";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";

const HeaderNavList = () => {
    return (
        <ul className="flex items-center mx-auto gap-x-5">
            <li>
                <HeaderNavItem to="/">Home</HeaderNavItem>
            </li>
            <li>
                <HeaderNavItem to="/figures">Figures</HeaderNavItem>
            </li>
            <li>
                <HeaderNavItem>
                    Category
                    {/* <Dropdown>
                        <DropdownSelect
                            icon={false}
                            title="Category"
                            className="hover:text-primary"
                        ></DropdownSelect>
                        <DropdownList>
                            <DropdownOption>Option 1</DropdownOption>
                            <DropdownOption>Option 2</DropdownOption>
                            <DropdownOption>Option 3</DropdownOption>
                        </DropdownList>
                    </Dropdown> */}
                </HeaderNavItem>
            </li>
            <li>
                <HeaderNavItem to="/news">News</HeaderNavItem>
            </li>
            <li>
                <HeaderNavItem to="/about">About</HeaderNavItem>
            </li>
            <li>
                <HeaderNavItem to="/management/figures">
                    Management
                </HeaderNavItem>
            </li>
        </ul>
    );
};

export default HeaderNavList;
