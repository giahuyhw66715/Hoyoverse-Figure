import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import FormLayout from "../../layout/FormLayout";
import Heading from "../../components/common/Heading";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/category/categorySlice";

const schema = yup.object().shape({
    name: yup.string().required("Category name is required"),
});

const CategoryAddNew = () => {
    const dispatch = useDispatch();
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

    const handleAddNewCategory = async (values) => {
        const request = { ...values };
        dispatch(addCategory(request));
        reset({});
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-black">
                New Category
            </Heading>
            <p className="text-sm text-grayDark">Add new category</p>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleAddNewCategory)}
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
                    <Button type="submit">Add New Category</Button>
                </div>
            </form>
        </div>
    );
};

export default CategoryAddNew;
