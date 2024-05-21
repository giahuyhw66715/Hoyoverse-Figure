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
import { addManufacturer } from "../../redux/manufacturer/manufacturerSlice";

const schema = yup.object().shape({
    name: yup.string().required("Brand name is required"),
});

const ManufacturerAddNew = () => {
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

    const handleAddNewManufacturer = async (values) => {
        dispatch(addManufacturer(values));
        reset({});
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-secondary">
                New Manufacturer
            </Heading>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleAddNewManufacturer)}
            >
                <FormLayout>
                    <Field>
                        <Label htmlFor="name">Manufacturer</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Manufacturer name"
                            name="name"
                        ></Input>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit" color="secondary">
                        Add New Manufacturer
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ManufacturerAddNew;
