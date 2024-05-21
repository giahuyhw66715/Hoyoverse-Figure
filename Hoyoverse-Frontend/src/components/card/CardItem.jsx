import PropTypes from "prop-types";
import Button from "../button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import slugify from "slugify";
import useFormatCurrency from "../../hooks/useFormatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/CartSlice";

const CardItem = ({ item }) => {
    const formatPrice = useFormatCurrency(item?.price);
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (Object.keys(cart).length === 0) {
            navigate("/sign-in");
            return;
        }

        dispatch(
            addToCart({
                cart: {
                    id: cart?.id,
                },
                figure: item,
                quantity: 1,
            })
        );
    };

    return (
        <div className="bg-white shadow-lg rounded-xl">
            <div className="w-full h-96">
                <NavLink
                    to={`/figures/${slugify(item?.title, {
                        lower: true,
                    })}-${item?.id}`}
                >
                    <img
                        src={
                            item?.image?.urls[0] ||
                            "https://product.hstatic.net/200000462939/product/10001_122f68dfcecc4921a9f4de076fe7be5a_master.jpg"
                        }
                        alt="item"
                        className="object-cover object-top w-full h-full rounded-md"
                    />
                </NavLink>
            </div>
            <div className="flex flex-col p-5">
                <h5 className="text-sm font-semibold uppercase text-neutral-400">
                    {item?.manufacturer?.name}
                </h5>
                <NavLink
                    to={`/items/${item?.id}-${slugify(item?.title, {
                        lower: true,
                    })}`}
                    className="mt-2 mb-3 text-xl font-semibold leading-normal text-black line-clamp-2"
                >
                    {item?.title}
                </NavLink>
                <strong className="mb-3 text-xl text-right text-secondary">
                    {formatPrice}
                </strong>
                <Button color="violet" onClick={handleAddToCart}>
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

CardItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.any,
        image: PropTypes.shape({
            urls: PropTypes.any,
        }),
        manufacturer: PropTypes.shape({
            name: PropTypes.any,
        }),
        price: PropTypes.any,
        title: PropTypes.any,
    }),
};

export default CardItem;
