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
import { addSeries } from "../../redux/series/seriesSlice";

const schema = yup.object().shape({
    name: yup.string().required("Series name is required"),
});

const SeriesAddNew = () => {
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

    const handleAddNewSeries = async (values) => {
        dispatch(addSeries(values));
        reset({});
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-secondary">
                New Series
            </Heading>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleAddNewSeries)}
            >
                <FormLayout>
                    <Field>
                        <Label htmlFor="name">Series</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Series name"
                            name="name"
                        ></Input>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit" color="secondary">
                        Add New Series
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SeriesAddNew;
