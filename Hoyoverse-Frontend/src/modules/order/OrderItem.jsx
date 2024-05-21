import PropTypes from "prop-types";
import useFormatCurrency from "../../hooks/useFormatCurrency";

const OrderItem = ({ item }) => {
    const { figure, quantity } = item;
    const price = useFormatCurrency(figure?.price * quantity);

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
                    <span className="text-[#707072] text-sm">
                        {figure?.category?.name}
                    </span>
                    <p className="text-sm">Quantity: {quantity}</p>
                </div>
            </div>
        </>
    );
};

OrderItem.propTypes = {
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

export default OrderItem;
