import Heading from "../../components/heading/Heading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFigureList, setRequest } from "../../redux/figure/figureSlice";
import CardList from "../../components/card/CardList";
import Pagination from "../../components/pagination/Pagination";
import FilterIcon from "../../components/icon/FilterIcon";
import { toggleDropdown } from "../../redux/dropdown/dropdownSlice";
import Sidebar from "../../components/sidebar/Sidebar";
import { getManufacturerList } from "../../redux/manufacturer/manufacturerSlice";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import Checkbox from "../../components/checkbox/Checkbox";
import Label from "../../components/label/Label";
import CheckboxList from "../../components/checkbox/CheckboxList";
import CheckboxField from "../../components/field/CheckboxField";
import InputRange from "../../components/input/InputRange";
import {
    DEFAULT_PAGE_LIMIT,
    DEFAULT_PAGE_NUMBER,
    DEFAULT_SORT_BY,
    DEFAULT_SORT_DIR,
} from "../../utils/constants";

const MIN_PRICE = "0";
const MAX_PRICE = "10000000";

const AllFigure = () => {
    const dispatch = useDispatch();
    const { request, figureList } = useSelector((state) => state.figure);
    const { manufacturerList } = useSelector((state) => state.manufacturer);
    const { handleSubmit, control, register, watch } = useForm();
    const watchMinPrice = watch("min_price", MIN_PRICE);
    const watchMaxPrice = watch("max_price", MAX_PRICE);

    const handleFilter = (values) => {
        dispatch(
            setRequest({
                ...values,
                page: DEFAULT_PAGE_NUMBER,
                limit: DEFAULT_PAGE_LIMIT,
                manufacturer_ids: values.manufacturer_ids.toString(),
                sortBy: DEFAULT_SORT_BY,
                sortDir: DEFAULT_SORT_DIR,
            })
        );
    };

    useEffect(() => {
        dispatch(
            setRequest({
                page: DEFAULT_PAGE_NUMBER,
                limit: DEFAULT_PAGE_LIMIT,
                sortBy: DEFAULT_SORT_BY,
                sortDir: DEFAULT_SORT_DIR,
            })
        );
    }, [dispatch]);

    useEffect(() => {
        console.log("Running");
        dispatch(getFigureList(request));
        dispatch(getManufacturerList());
    }, [dispatch, request]);

    return (
        <>
            <div className="flex items-center justify-between mt-20 mb-9">
                <Heading className="m-0">All Figures</Heading>
                <span
                    className="cursor-pointer"
                    onClick={() => dispatch(toggleDropdown("filters"))}
                >
                    <FilterIcon></FilterIcon>
                </span>
            </div>
            <Sidebar name="filters">
                <form onSubmit={handleSubmit(handleFilter)} className="p-8">
                    <Heading className="text-xl m-0 mb-2">Manufacturer</Heading>
                    <CheckboxList>
                        {manufacturerList?.length > 0 &&
                            manufacturerList.map((item) => (
                                <CheckboxField key={item.id}>
                                    <Checkbox
                                        control={control}
                                        name="manufacturer_ids"
                                        id={item?.id}
                                        value={item?.id}
                                        register={register}
                                    ></Checkbox>
                                    <Label
                                        htmlFor={item?.id}
                                        className="font-normal"
                                    >
                                        {item?.name}
                                    </Label>
                                </CheckboxField>
                            ))}
                    </CheckboxList>
                    <Heading className="text-xl m-0 mb-2">Price Range</Heading>
                    <InputRange
                        register={register}
                        name="price-range"
                        minValue={watchMinPrice}
                        maxValue={watchMaxPrice}
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        minName="min_price"
                        maxName="max_price"
                    />
                    <Button color="black" type="submit">
                        Filter
                    </Button>
                </form>
            </Sidebar>
            <CardList list={figureList}></CardList>
            <Pagination request={request}></Pagination>
        </>
    );
};

export default AllFigure;
