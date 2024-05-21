import PropTypes from "prop-types";
import useFormatCurrency from "../../hooks/useFormatCurrency";
import TrashIcon from "../icon/TrashIcon";
import Counter from "../counter/Counter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../redux/cart/CartSlice";

const LIMIT = 5;

const CartItem = ({ item }) => {
    const { figure, quantity: currentQuantity } = item;
    const [quantity, setQuantity] = useState(currentQuantity);
    const price = useFormatCurrency(figure?.price * quantity);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        const updatedQuantity = quantity < LIMIT ? quantity + 1 : quantity;
        setQuantity(updatedQuantity);
        dispatch(
            updateCartItem({
                ...item,
                quantity: updatedQuantity,
            })
        );
    };

    const handleDecrement = () => {
        const updatedQuantity = quantity > 0 ? quantity - 1 : 1;
        setQuantity(updatedQuantity);
        dispatch(
            updateCartItem({
                ...item,
                quantity: updatedQuantity,
            })
        );
    };

    const handleRemoveCartItem = () => {
        dispatch(
            deleteCartItem({
                id: item?.id,
            })
        );
    };

    return (
        <>
            <div className="flex items-start gap-x-4">
                <div className="w-full max-w-40 h-40">
                    <img
                        src={figure?.image?.urls[0]}
                        alt=""
                        className="w-full h-full rounded-lg object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-y-1 py-1">
                    <div className="flex items-center justify-between font-medium">
                        <h3>{figure?.title}</h3>
                        <span>{price}</span>
                    </div>
                    <span className="text-[#707072] text-sm mb-3">
                        {figure?.category?.name}
                    </span>
                    <Counter
                        quantity={quantity}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        limit={5}
                        size="small"
                    ></Counter>
                    <span
                        className="cursor-pointer mt-3"
                        onClick={handleRemoveCartItem}
                    >
                        <TrashIcon />
                    </span>
                    {/* <div className="mt-3">
                        <CustomModal btn={<TrashIcon />}>
                            <h5 className="text-center">
                                Are you sure you want to delete this item?
                            </h5>
                            <div className="flex items-center justify-center gap-x-3 mt-3">
                                <Button color="black" className="px-6 py-2">
                                    No
                                </Button>
                                <Button color="secondary" className="px-6 py-2">
                                    Yes
                                </Button>
                            </div>
                        </CustomModal>
                    </div> */}
                </div>
            </div>
        </>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        figure: PropTypes.shape({
            category: PropTypes.shape({
                name: PropTypes.any,
            }),
            image: PropTypes.shape({
                urls: PropTypes.any,
            }),
            price: PropTypes.number,
            title: PropTypes.any,
        }),
        id: PropTypes.any,
        quantity: PropTypes.any,
    }),
};

export default CartItem;
