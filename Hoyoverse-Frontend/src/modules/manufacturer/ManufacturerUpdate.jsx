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
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getManufacturerById,
    updateManufacturer,
} from "../../redux/manufacturer/manufacturerSlice";

const schema = yup.object().shape({
    name: yup.string().required("Manufacturer name is required"),
});

const ManufacturerUpdate = () => {
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

    const { manufacturer } = useSelector((state) => state.manufacturer);

    useEffect(() => {
        dispatch(getManufacturerById(id));
        reset({
            name: manufacturer?.name,
        });
    }, [manufacturer?.name, dispatch, id, reset]);

    const handleUpdateManufacturer = async (values) => {
        const newManufacturer = { ...manufacturer, name: values.name };
        dispatch(updateManufacturer(newManufacturer));
        reset({});
        navigate("/admin/manufacturers");
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-secondary">
                Update Manufacturer
            </Heading>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleUpdateManufacturer)}
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
                        Update Manufacturer
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ManufacturerUpdate;
