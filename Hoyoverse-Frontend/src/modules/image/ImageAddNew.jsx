import { useEffect } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/common/Heading";
import Field from "../../components/field/Field";
import Label from "../../components/label/Label";
import FormLayout from "../../layout/FormLayout";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import DropdownOption from "../../components/dropdown/DropdownOption";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import DropdownList from "../../components/dropdown/DropdownList";
import { useDispatch, useSelector } from "react-redux";
import { getAllFigures } from "../../store/figure/figureSlice";
import ImageUploader from "../../components/input/ImageUploader";
import { addImages } from "../../store/image/imageSlice";

const schema = yup.object().shape({});

const ImageAddNew = () => {
    const dispatch = useDispatch();
    const {
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            figure: "",
            images: [],
        },
    });

    const handleUploadImage = async (values) => {
        dispatch(addImages(values));
        reset({});
    };

    useEffect(() => {
        dispatch(getAllFigures());
    }, [dispatch]);

    const { figures } = useSelector((state) => state.figure);

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-black">
                New Image
            </Heading>
            <p className="text-sm text-grayDark">Add new image</p>
            <form onSubmit={handleSubmit(handleUploadImage)}>
                <FormLayout>
                    <Field>
                        <Label htmlFor="figure">Figure</Label>
                        <Dropdown errors={errors} name="series">
                            <DropdownSelect
                                dark
                                name="figure"
                                defaultValue="Select figure"
                                className="justify-between"
                                watch={watch}
                                border
                            ></DropdownSelect>
                            <DropdownList>
                                {figures?.length > 0 &&
                                    figures.map((figure) => (
                                        <DropdownOption
                                            key={figure.id}
                                            name="figure"
                                            option={figure}
                                            setValue={setValue}
                                        >
                                            {`${figure?.id} - ${figure?.title}`}
                                        </DropdownOption>
                                    ))}
                            </DropdownList>
                        </Dropdown>
                    </Field>
                    <Field>
                        <Label htmlFor="images">Upload image</Label>
                        <ImageUploader
                            multiple
                            setValue={setValue}
                            name="images"
                        ></ImageUploader>
                    </Field>
                </FormLayout>
                <div className="text-center mt-7">
                    <Button type="submit">Upload your image</Button>
                </div>
            </form>
        </div>
    );
};

export default ImageAddNew;
