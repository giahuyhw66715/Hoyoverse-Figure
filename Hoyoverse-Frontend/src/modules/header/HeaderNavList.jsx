import HeaderNavItem from "./HeaderNavItem";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllSeries } from "../../store/series/seriesSlice";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../store/category/categorySlice";
import slugify from "slugify";

const HeaderNavList = () => {
    const dispatch = useDispatch();
    const {
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        dispatch(getAllSeries());
        dispatch(getAllCategories());
    }, [dispatch]);
    const { series } = useSelector((state) => state.series);
    const { categories } = useSelector((state) => state.category);

    const handleSlugify = (slug) => {
        return slugify(slug, {
            lower: true,
        });
    };

    return (
        <ul className="flex items-center mx-auto gap-x-5">
            <li>
                <HeaderNavItem to="/">Home</HeaderNavItem>
            </li>
            <li>
                <HeaderNavItem>
                    <Dropdown name="figures" errors={errors}>
                        <DropdownSelect
                            name="figures"
                            defaultValue="Figures"
                            watch={watch}
                            className="hover:text-primary"
                            icon={false}
                        ></DropdownSelect>
                        <DropdownList>
                            <DropdownOption url="/figures/all-figures">
                                All figures
                            </DropdownOption>
                            {categories?.length > 0 &&
                                categories.map((category) => (
                                    <DropdownOption
                                        key={category.id}
                                        url={`/categories/${handleSlugify(
                                            category?.name + "-" + category?.id
                                        )}`}
                                        name="category"
                                        option={category}
                                        setValue={setValue}
                                    >
                                        {category?.name}
                                    </DropdownOption>
                                ))}
                            {series?.length > 0 &&
                                series.map((seriesItem) => (
                                    <DropdownOption
                                        key={seriesItem.id}
                                        url={`/series/${handleSlugify(
                                            seriesItem?.name +
                                                "-" +
                                                seriesItem?.id
                                        )}`}
                                        name="series"
                                        option={seriesItem}
                                        setValue={setValue}
                                    >
                                        {seriesItem?.name}
                                    </DropdownOption>
                                ))}
                        </DropdownList>
                    </Dropdown>
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
