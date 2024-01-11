import { getAllCategories } from "../../store/category/categorySlice";
import { getAllSeries } from "../../store/series/seriesSlice";
import { addFigure } from "../../store/figure/figureSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import Field from "../../components/field/Field";
import FormLayout from "../../layout/FormLayout";
import Heading from "../../components/common/Heading";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    characterName: yup.string().required("Character name is required"),
    releaseDate: yup.string().required("Release date is required"),
    price: yup.number().required("Number is required"),
    height: yup.string().required("Height is required"),
    totalQuantity: yup.number().required("Total quantity is required"),
    availableQuantity: yup.number().required("Available quantity is required"),
    category: yup.object().required("Please select category"),
    series: yup.object().required("Please select series"),
});

const FigureAddNew = () => {
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            characterName: "",
            releaseDate: "",
            price: 0,
            discount: 0,
            height: "",
            totalQuantity: 0,
            availableQuantity: 0,
        },
    });

    const handleAddNewFigure = async (values) => {
        const request = { ...values };
        dispatch(addFigure(request));
        reset({});
    };

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllSeries());
    }, [dispatch]);

    const { categories } = useSelector((state) => state.category);
    const { series } = useSelector((state) => state.series);

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-black">
                New Figure
            </Heading>
            <p className="text-sm text-grayDark">Add new figure</p>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleAddNewFigure)}
            >
                <FormLayout>
                    <Field>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Title"
                            name="title"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="characterName">Character name</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Character name"
                            name="characterName"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="releaseDate">Release Date</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Release date"
                            name="releaseDate"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="price">Price</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Price"
                            name="price"
                            type="number"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="discount">Discount (%)</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Discount"
                            name="discount"
                            type="number"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Height"
                            name="height"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="totalQuantity">Total quantity</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Total quantity"
                            name="totalQuantity"
                            type="number"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="availableQuantity">
                            Available quantity
                        </Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Available quantity"
                            name="availableQuantity"
                            type="number"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="category">Category</Label>
                        <Dropdown errors={errors} name="category">
                            <DropdownSelect
                                dark
                                name="category"
                                defaultValue="Select category"
                                className="justify-between"
                                watch={watch}
                                border
                            ></DropdownSelect>
                            <DropdownList>
                                {categories?.length > 0 &&
                                    categories.map((category) => (
                                        <DropdownOption
                                            key={category.id}
                                            name="category"
                                            option={category}
                                            setValue={setValue}
                                        >
                                            {category?.name}
                                        </DropdownOption>
                                    ))}
                            </DropdownList>
                        </Dropdown>
                    </Field>
                    <Field>
                        <Label htmlFor="series">Series</Label>
                        <Dropdown errors={errors} name="series">
                            <DropdownSelect
                                dark
                                name="series"
                                defaultValue="Select series"
                                className="justify-between"
                                watch={watch}
                                border
                            ></DropdownSelect>
                            <DropdownList>
                                {series?.length > 0 &&
                                    series.map((seriesItem) => (
                                        <DropdownOption
                                            key={seriesItem.id}
                                            name="series"
                                            option={seriesItem}
                                            setValue={setValue}
                                        >
                                            {seriesItem?.name}
                                        </DropdownOption>
                                    ))}
                            </DropdownList>
                        </Dropdown>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit">Add New Figure</Button>
                </div>
            </form>
        </div>
    );
};

export default FigureAddNew;
