import PropTypes from "prop-types";
import Button from "../button/Button";

const CardItem = ({ figure }) => {
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div className="bg-white shadow-lg rounded-xl">
            <div className="w-full h-96">
                <img
                    src={
                        figure?.images[0]?.url ||
                        "https://product.hstatic.net/200000462939/product/10001_122f68dfcecc4921a9f4de076fe7be5a_master.jpg"
                    }
                    alt="Figure"
                    className="object-cover object-top w-full h-full rounded-md"
                />
            </div>
            <div className="flex flex-col p-5">
                <h5 className="text-sm font-semibold uppercase text-neutral-400">
                    {figure?.brand?.name}
                </h5>
                <h3 className="mt-2 mb-3 text-xl font-semibold leading-normal text-black line-clamp-2">
                    {figure?.title}
                </h3>
                <strong className="mb-3 text-xl text-right text-secondary">
                    {VND.format(figure?.price)}
                </strong>
                <Button color="violet">Add to cart</Button>
            </div>
        </div>
    );
};

CardItem.propTypes = {
    figure: PropTypes.shape({
        brand: PropTypes.shape({
            name: PropTypes.any,
        }),
        id: PropTypes.any,
        image: PropTypes.string,
        images: PropTypes.any,
        price: PropTypes.any,
        title: PropTypes.any,
    }),
};

export default CardItem;
