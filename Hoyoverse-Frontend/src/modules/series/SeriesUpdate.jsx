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
import { getSeriesById, updateSeries } from "../../redux/series/seriesSlice";

const schema = yup.object().shape({
    name: yup.string().required("Series name is required"),
});

const SeriesUpdate = () => {
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

    const { series } = useSelector((state) => state.series);

    useEffect(() => {
        dispatch(getSeriesById(id));
        reset({
            name: series?.name,
        });
    }, [series?.name, dispatch, id, reset]);

    const handleUpdateSeries = async (values) => {
        const newSeries = { ...series, name: values.name };
        dispatch(updateSeries(newSeries));
        reset({});
        navigate("/admin/series");
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-secondary">
                Update Series
            </Heading>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(handleUpdateSeries)}
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
                        Update Series
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SeriesUpdate;
