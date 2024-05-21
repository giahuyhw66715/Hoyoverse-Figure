import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Heading from "../components/heading/Heading";
import { darkLogoUrl } from "../utils/constants";
import Input from "../components/input/Input";
import PasswordIcon from "../components/icon/PasswordIcon";
import EmailIcon from "../components/icon/EmailIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../redux/auth/authSlice";
import { useEffect } from "react";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Please enter your email"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Please enter your password"),
});

const SignInPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleSignIn = (data) => {
        dispatch(authLogin(data));
    };

    useEffect(() => {
        if (user) {
            navigate(-1);
        }
    }, [navigate, user]);

    return (
        <div className="flex items-center h-screen">
            <div className="bg-center bg-no-repeat bg-cover bg-sign-in w-full max-w-[800px] h-full"></div>
            <div className="flex-1 max-w-[500px] mx-auto">
                <NavLink to="/">
                    <img
                        src={darkLogoUrl}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </NavLink>
                <Heading className="text-center">Sign In</Heading>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="flex flex-col mb-8 gap-y-7">
                        <Input
                            labelIcon={<EmailIcon />}
                            placeholder="Email"
                            type="email"
                            name="email"
                            control={control}
                            errors={errors}
                        ></Input>
                        <Input
                            labelIcon={<PasswordIcon />}
                            placeholder="Password"
                            type="password"
                            name="password"
                            control={control}
                            errors={errors}
                            toggle
                        ></Input>
                    </div>
                    <Button
                        color="black"
                        className="w-full rounded-full"
                        type="submit"
                    >
                        Sign In
                    </Button>
                    <div className="mt-8 text-center">
                        <p>
                            {`Don't have an account? `}
                            <NavLink
                                to="/sign-up"
                                className="text-primary hover:underline"
                            >
                                Sign Up
                            </NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
