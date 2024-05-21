import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import FormLayout from "../../layout/FormLayout";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { useDispatch } from "react-redux";
import Heading from "../../components/heading/Heading";
import { addCategory } from "../../redux/category/categorySlice";

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
        dispatch(addCategory(values));
        reset({});
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-secondary">
                New Category
            </Heading>
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
                    <Button type="submit" color="secondary">
                        Add New Category
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CategoryAddNew;
