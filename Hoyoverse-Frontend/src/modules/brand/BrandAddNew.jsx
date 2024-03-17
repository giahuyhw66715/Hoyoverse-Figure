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
import { addBrand } from "../../store/brand/brandSlice";

const schema = yup.object().shape({
    name: yup.string().required("Brand name is required"),
});

const BrandAddNew = () => {
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

    const handleAddNewBrand = async (values) => {
        const request = { ...values };
        dispatch(addBrand(request));
        reset({});
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-black">
                New Brand
            </Heading>
            <p className="text-sm text-grayDark">Add new Brand</p>
            <form autoComplete="off" onSubmit={handleSubmit(handleAddNewBrand)}>
                <FormLayout>
                    <Field>
                        <Label htmlFor="name">Brand</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Brand name"
                            name="name"
                        ></Input>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit">Add New Brand</Button>
                </div>
            </form>
        </div>
    );
};

export default BrandAddNew;
