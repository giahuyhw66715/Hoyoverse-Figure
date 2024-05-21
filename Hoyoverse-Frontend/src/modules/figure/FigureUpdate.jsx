import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { getCategoryList } from "../../redux/category/categorySlice";
import { getSeriesList } from "../../redux/series/seriesSlice";
import { getManufacturerList } from "../../redux/manufacturer/manufacturerSlice";
import Heading from "../../components/heading/Heading";
import FormLayout from "../../layout/FormLayout";
import Field from "../../components/field/Field";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import ImageUploader from "../../components/input/ImageUploader";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import { getFigure, updateFigure } from "../../redux/figure/figureSlice";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    character_name: yup.string().required("Character name is required"),
    release_date: yup.string().required("Release date is required"),
    price: yup
        .number()
        .typeError("Price must be a number")
        .required("Number is required"),
    size: yup.string().required("Size is required"),
    total_quantity: yup
        .number()
        .typeError("Total quantity must be a number")
        .required("Total quantity is required"),
    available_quantity: yup
        .number()
        .typeError("Available quantity must be a number")
        .required("Available quantity is required"),
    category: yup.object().required("Please select category"),
    series: yup.object().required("Please select series"),
    manufacturer: yup.object().required("Please select manufacturer"),
});

const FigureUpdate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm({
        // resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            character_name: "",
            release_date: "",
            price: 0,
            size: "",
            total_quantity: 0,
            available_quantity: 0,
            category: "",
            series: "",
            manufacturer: "",
        },
    });

    const { figure } = useSelector((state) => state.figure);
    const [categoryTitle, setCategoryTitle] = useState("Category");
    const [seriesTitle, setSeriesTitle] = useState("Series");
    const [manufacturerTitle, setManufacturerTitle] = useState("Manufacturer");

    const handleUpdateFigure = async (values) => {
        dispatch(updateFigure({ ...figure, ...values }));
        reset();
        navigate("/admin/figures");
    };

    useEffect(() => {
        dispatch(getCategoryList());
        dispatch(getSeriesList());
        dispatch(getManufacturerList());
        dispatch(getFigure(id));
        reset({
            title: figure?.title,
            character_name: figure?.character_name,
            release_date: figure?.release_date,
            price: figure?.price,
            size: figure?.size,
            total_quantity: figure?.total_quantity,
            available_quantity: figure?.available_quantity,
            category: figure?.category,
            series: figure?.series,
            manufacturer: figure?.manufacturer,
            image: figure?.image,
        });
        setCategoryTitle(figure?.category?.name);
        setSeriesTitle(figure?.series?.name);
        setManufacturerTitle(figure?.manufacturer?.name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, figure?.id, id, reset]);

    const { categoryList } = useSelector((state) => state.category);
    const { seriesList } = useSelector((state) => state.series);
    const { manufacturerList } = useSelector((state) => state.manufacturer);

    const categoryOptions = categoryList?.map((category) => ({
        id: category.id,
        name: category.name,
    }));
    const seriesOptions = seriesList?.map((series) => ({
        id: series.id,
        name: series.name,
    }));
    const manufacturerOptions = manufacturerList?.map((manufacturer) => ({
        id: manufacturer.id,
        name: manufacturer.name,
    }));

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-black">
                Update Figure
            </Heading>
            <form
                autoComplete="off"
                spellCheck="false"
                onSubmit={handleSubmit(handleUpdateFigure)}
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
                            name="character_name"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="releaseDate">Release Date</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Release date"
                            name="release_date"
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
                        <Label htmlFor="size">Size</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Size"
                            name="size"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="totalQuantity">Total quantity</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Total quantity"
                            name="total_quantity"
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
                            name="available_quantity"
                            type="number"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="availableQuantity">Category</Label>
                        <Dropdown
                            title={categoryTitle}
                            setTitle={setCategoryTitle}
                            name="category"
                            className="bg-transparent text-black border w-full p-5 rounded-xl"
                            options={categoryOptions}
                            setValue={setValue}
                        ></Dropdown>
                    </Field>
                    <Field>
                        <Label htmlFor="series">Series</Label>
                        <Dropdown
                            title={seriesTitle}
                            setTitle={setSeriesTitle}
                            name="series"
                            className="bg-transparent text-black border w-full p-5 rounded-xl"
                            options={seriesOptions}
                            setValue={setValue}
                        ></Dropdown>
                    </Field>
                    <Field>
                        <Label htmlFor="manufacturer">Manufacturer</Label>
                        <Dropdown
                            title={manufacturerTitle}
                            setTitle={setManufacturerTitle}
                            name="manufacturer"
                            className="bg-transparent text-black border w-full p-5 rounded-xl"
                            options={manufacturerOptions}
                            setValue={setValue}
                        ></Dropdown>
                    </Field>
                    <Field>
                        <Label htmlFor="images">Images</Label>
                        <ImageUploader
                            multiple
                            setValue={setValue}
                            name="images"
                        ></ImageUploader>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit" color="secondary">
                        Update Figure
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FigureUpdate;
