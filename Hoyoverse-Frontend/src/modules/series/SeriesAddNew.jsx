import Heading from "../../components/common/Heading";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../../config/API";
import FormLayout from "../../layout/FormLayout";
import Field from "../../components/field/Field";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const schema = yup.object().shape({
    name: yup.string().required("Series name is required"),
});

const SeriesAddNew = () => {
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
            console.log("🚀 ~ values:", values);
            const response = await axios.post(API.addSeries, values);
            console.log(response.data);
            reset({});
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-black">
                New Series
            </Heading>
            <p className="text-sm text-grayDark">Add new series</p>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleAddNewCategory)}
            >
                <FormLayout>
                    <Field>
                        <Label>Series</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Series name"
                            name="name"
                        ></Input>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit">Add series</Button>
                </div>
            </form>
        </div>
    );
};

export default SeriesAddNew;
