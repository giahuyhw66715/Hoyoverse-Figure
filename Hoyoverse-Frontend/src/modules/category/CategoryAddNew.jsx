import { API } from "../../config/API";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import FormLayout from "../../layout/FormLayout";
import Heading from "../../components/common/Heading";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";

const schema = yup.object().shape({
    name: yup.string().required("Category name is required"),
});

const CategoryAddNew = () => {
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
        try {
            await axios.post(API.addCategory, values);
            toast.success("Add new category successfully");
            reset({});
        } catch (error) {
            toast.error("Something went wrong");
        }
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
                    <Button type="submit">Add Category</Button>
                </div>
            </form>
        </div>
    );
};

export default CategoryAddNew;
