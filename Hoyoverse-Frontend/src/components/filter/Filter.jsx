import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../dropdown/Dropdown";
import DropdownList from "../dropdown/DropdownList";
import DropdownSelect from "../dropdown/DropdownSelect";
import { useForm } from "react-hook-form";
import DropdownOption from "../dropdown/DropdownOption";
import { useEffect } from "react";
import { getAllBrands } from "../../store/brand/brandSlice";

const prices = ["1000000 - 2000000", "2000000 - 3000000", "3000000 - 4000000"];

const Filter = () => {
    const { brands } = useSelector((state) => state.brand);
    const dispatch = useDispatch();
    const { setValue, watch, formState: errors } = useForm();

    useEffect(() => {
        dispatch(getAllBrands());
    }, [dispatch]);
    return (
        <div className="flex items-center gap-x-10 mb-9">
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
            <Dropdown errors={errors} name="brands">
                <DropdownSelect
                    dark
                    name="brands"
                    defaultValue="Select brands"
                    className="justify-between"
                    watch={watch}
                    border
                ></DropdownSelect>
                <DropdownList>
                    {brands?.length > 0 &&
                        brands.map((brand) => (
                            <DropdownOption
                                key={brand.id}
                                name="brands"
                                option={brand}
                                setValue={setValue}
                            >
                                {`${brand?.id} - ${brand?.name}`}
                            </DropdownOption>
                        ))}
                </DropdownList>
            </Dropdown>
            <Dropdown errors={errors} name="prices">
                <DropdownSelect
                    dark
                    name="prices"
                    defaultValue="Select prices"
                    className="justify-between"
                    watch={watch}
                    border
                ></DropdownSelect>
                <DropdownList>
                    {prices?.length > 0 &&
                        prices.map((price) => (
                            <DropdownOption
                                key={price}
                                name="prices"
                                option={price}
                                setValue={setValue}
                            >
                                {price}
                            </DropdownOption>
                        ))}
                </DropdownList>
            </Dropdown>
        </div>
    );
};

export default Filter;
