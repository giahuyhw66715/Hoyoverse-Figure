import PropTypes from "prop-types";
import Button from "../button/Button";

const Counter = ({
    quantity = 1,
    handleIncrement,
    handleDecrement,
    limit,
    size = "large",
}) => {
    // const [quantity, setQuantity] = useState(initialQuantity);

    // const handleIncrement = () => {
    //     quantity < limit ? setQuantity(quantity + 1) : quantity;
    // };

    // const handleDecrement = () => {
    //     quantity > 0 ? setQuantity(quantity - 1) : 1;
    // };
    return (
        <div className="flex items-center gap-x-5">
            <Button
                className={`${
                    size === "large" ? "w-10 h-10" : "w-8 h-8"
                } p-0 text-black rounded-md bg-slate-200 ${
                    quantity <= 1 ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={handleDecrement}
            >
                -
            </Button>
            <span className="font-semibold">{quantity}</span>
            <Button
                className={`${
                    size === "large" ? "w-10 h-10" : "w-8 h-8"
                } p-0 text-black rounded-md bg-slate-200 ${
                    quantity >= limit ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={handleIncrement}
            >
                +
            </Button>
        </div>
    );
};

Counter.propTypes = {
    handleDecrement: PropTypes.func,
    handleIncrement: PropTypes.func,
    limit: PropTypes.number,
    quantity: PropTypes.number,
    size: PropTypes.string,
};

export default Counter;
