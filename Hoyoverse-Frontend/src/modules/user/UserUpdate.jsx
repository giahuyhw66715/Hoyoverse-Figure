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
import { getUser, updateUser } from "../../redux/user/userSlice";
import { toast } from "react-toastify";

const schema = yup.object().shape({
    password: yup.string().required("Password name is required"),
    confirmPassword: yup.string().required("Confirm password name is required"),
});

const UserUpdate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        // resolver: yupResolver(schema),
        defaultValues: {
            fullName: "",
            email: "",
            role: "",
            password: "",
            confirmPassword: "",
        },
    });

    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUser(id));
        reset({
            fullName: user?.fullName,
            email: user?.email,
            role: user?.role,
        });
    }, [dispatch, id, reset, user?.email, user?.fullName, user?.role]);

    const handleUpdateUser = async (values) => {
        if (values.password !== values.confirmPassword) {
            toast.error("Password does not match");
            return;
        }
        let newUser;
        if (!values.password && !values.confirmPassword) {
            newUser = {
                id: user.id,
                fullName: values.fullName,
                role: values.role,
            };
        } else {
            newUser = { ...values, id: user.id };
        }
        dispatch(updateUser(newUser));
        reset({});
        navigate("/admin/users");
    };

    return (
        <div>
            <Heading className="mt-0 mb-3 text-left text-secondary">
                Update User
            </Heading>
            <form autoComplete="off" onSubmit={handleSubmit(handleUpdateUser)}>
                <FormLayout>
                    <Field>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Email"
                            name="email"
                            disabled
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="fullName">Full name</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Full name"
                            name="fullName"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="role">Role</Label>
                        <Input
                            control={control}
                            errors={errors}
                            placeholder="Role"
                            name="role"
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            placeholder="Password"
                            type="password"
                            name="password"
                            control={control}
                            errors={errors}
                            toggle
                        ></Input>
                    </Field>
                    <Field>
                        <Label htmlFor="confirmPassword">
                            Confirm password
                        </Label>
                        <Input
                            placeholder="Password"
                            type="password"
                            name="confirmPassword"
                            control={control}
                            errors={errors}
                            toggle
                        ></Input>
                    </Field>
                </FormLayout>
                <div className="mt-5 text-center">
                    <Button type="submit" color="secondary">
                        Update User
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UserUpdate;
