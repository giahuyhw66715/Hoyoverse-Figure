import { useParams } from "react-router-dom";
import Heading from "../../components/heading/Heading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFigureList, setRequest } from "../../redux/figure/figureSlice";
import CardList from "../../components/card/CardList";
import useGetRequestValue from "../../hooks/useGetRequestValue";
import Pagination from "../../components/pagination/Pagination";
import FilterIcon from "../../components/icon/FilterIcon";
import { toggleDropdown } from "../../redux/dropdown/dropdownSlice";
import Sidebar from "../../components/sidebar/Sidebar";
import {
    DEFAULT_PAGE_LIMIT,
    DEFAULT_PAGE_NUMBER,
    DEFAULT_SORT_BY,
    DEFAULT_SORT_DIR,
    MAX_PRICE,
    MIN_PRICE,
} from "../../utils/constants";
import { useForm } from "react-hook-form";
import CheckboxList from "../../components/checkbox/CheckboxList";
import { getManufacturerList } from "../../redux/manufacturer/manufacturerSlice";
import CheckboxField from "../../components/field/CheckboxField";
import Checkbox from "../../components/checkbox/Checkbox";
import Label from "../../components/label/Label";
import InputRange from "../../components/input/InputRange";
import Button from "../../components/button/Button";

const SeriesFigure = () => {
    const { series } = useParams();
    const { request, figureList } = useSelector((state) => state.figure);
    const { manufacturerList } = useSelector((state) => state.manufacturer);
    const { id, name } = useGetRequestValue(series);
    const { handleSubmit, control, register, watch } = useForm();
    const watchMinPrice = watch("min_price", MIN_PRICE);
    const watchMaxPrice = watch("max_price", MAX_PRICE);
    const dispatch = useDispatch();

    const handleFilter = (values) => {
        dispatch(
            setRequest({
                ...values,
                page: DEFAULT_PAGE_NUMBER,
                limit: DEFAULT_PAGE_LIMIT,
                sortBy: DEFAULT_SORT_BY,
                sortDir: DEFAULT_SORT_DIR,
                series_id: id,
                manufacturer_ids: values.manufacturer_ids.toString(),
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
                series_id: id,
            })
        );
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getFigureList(request));
        dispatch(getManufacturerList());
    }, [dispatch, id, request]);

    return (
        <>
            <div className="flex items-center justify-between mt-20 mb-9">
                <Heading className="m-0">{name}</Heading>
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

export default SeriesFigure;
