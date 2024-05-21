import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
    const { cart } = useSelector((state) => state.cart);
    return (
        <div className="flex flex-col gap-5">
            {cart.cartItems?.map((item) => (
                <CartItem key={item?.id} item={item}></CartItem>
            ))}
        </div>
    );
};

export default CartList;
