import Heading from "../components/heading/Heading";
import Authentication from "../components/authentication/Authentication";
import CartList from "../components/cart/CartList";
import Button from "../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import useFormatCurrency from "../hooks/useFormatCurrency";
import { useEffect, useState } from "react";
import { clearCart, getCartByUser } from "../redux/cart/CartSlice";
import { getToken } from "../utils/auth";
import CustomModal from "../components/modal/CustomModal";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import { createOrder } from "../redux/order/orderSlice";

const CartPage = () => {
    const { cart } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);
    const totalPrice = cart?.cartItems?.reduce(
        (total, item) => total + item.figure.price * item.quantity,
        0
    );
    const totalPriceFormatted = useFormatCurrency(totalPrice);
    const dispatch = useDispatch();
    const { accessToken } = getToken();
    const [isOpen, setIsOpen] = useState(false);

    const { handleSubmit, control } = useForm();

    const handleCheckOut = (values) => {
        dispatch(
            createOrder({
                order: {
                    ...values,
                    user: {
                        id: user?.id,
                    },
                    total: totalPrice,
                },
                cart,
            })
        );
        dispatch(
            clearCart({
                cart_id: cart?.id,
            })
        );
        setIsOpen(false);
    };

    useEffect(() => {
        document.title = "Cart - HoYoverse";
    }, []);
    useEffect(() => {
        dispatch(getCartByUser({ user_id: user?.id }));
    }, [accessToken, dispatch, user?.id]);

    return (
        <Authentication>
            <div className="container">
                <div className="grid grid-cols-3 gap-x-5">
                    <div className="col-span-2">
                        <Heading>Bag</Heading>
                        <CartList></CartList>
                    </div>
                    <div className="pl-10">
                        <Heading>Summary</Heading>
                        <div className="flex items-center justify-between">
                            <span>Total</span>
                            <span>{totalPriceFormatted}</span>
                        </div>
                        <hr className="mt-4 mb-8" />
                        <CustomModal
                            btn={
                                <Button
                                    color="black"
                                    className="w-full rounded-full"
                                >
                                    Checkout
                                </Button>
                            }
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        >
                            <h5 className="text-center font-medium text-lg">
                                Are you sure you want to checkout?
                            </h5>
                            <form onSubmit={handleSubmit(handleCheckOut)}>
                                <Input
                                    name="address"
                                    control={control}
                                    placeholder="Address"
                                    className="mt-5"
                                ></Input>
                                <Input
                                    name="phoneNumber"
                                    control={control}
                                    placeholder="Phone number"
                                    className="mt-5"
                                ></Input>
                                <div className="flex items-center justify-center gap-x-3 mt-5">
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        color="black"
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" color="secondary">
                                        Confirm
                                    </Button>
                                </div>
                            </form>
                        </CustomModal>
                    </div>
                </div>
            </div>
        </Authentication>
    );
};

export default CartPage;
