import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import FormLayout from "../../layout/FormLayout";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../components/heading/Heading";
import {
    getCategoryById,
    updateCategory,
} from "../../redux/category/categorySlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup.object().shape({
    name: yup.string().required("Category name is required"),
});

const CategoryUpdate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
        },
    });

    const { category } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(getCategoryById(id));
        reset({
            name: category?.name,
        });
    }, [category?.name, dispatch, id, reset]);

    const handleUpdateCategory = async (values) => {
        const newCategory = { ...category, name: values.name };
        dispatch(updateCategory(newCategory));
        reset({});
        navigate("/admin/categories");
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-secondary">
                Update Category
            </Heading>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleUpdateCategory)}
            >
                <FormLayout>
                    <Field>
                        <Label htmlFor="name">Category</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Category name"
                            name="name"
                        ></Input>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit" color="secondary">
                        Update Category
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CategoryUpdate;
