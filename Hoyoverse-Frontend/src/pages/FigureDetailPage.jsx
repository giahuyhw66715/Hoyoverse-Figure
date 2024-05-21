import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import Heading from "../components/heading/Heading";
import CardList from "../components/card/CardList";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetRequestValue from "../hooks/useGetRequestValue";
import { getFigure, getFigureList } from "../redux/figure/figureSlice";
import useFormatCurrency from "../hooks/useFormatCurrency";
import { v4 } from "uuid";
import CustomModal from "../components/modal/CustomModal";
import { addToCart } from "../redux/cart/CartSlice";
import {
    DEFAULT_PAGE_NUMBER,
    DEFAULT_SORT_BY,
    DEFAULT_SORT_DIR,
} from "../utils/constants";

const FigureDetailPage = () => {
    const { figureList } = useSelector((state) => state.figure);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { requestFigure } = useParams();
    const { id } = useGetRequestValue(requestFigure);
    const dispatch = useDispatch();
    const { figure } = useSelector((state) => state.figure);
    const images = figure?.image?.urls || [];
    const formatPrice = useFormatCurrency(figure?.price);
    const { cart } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [relevantFigures, setRelevantFigures] = useState([]);

    useEffect(() => {
        dispatch(getFigure(id));
        dispatch(
            getFigureList({
                page: DEFAULT_PAGE_NUMBER,
                limit: 8,
                category_id: figure?.category?.id,
                sortBy: DEFAULT_SORT_BY,
                sortDir: DEFAULT_SORT_DIR,
            })
        );
        document.title = `${figure?.title} - HoYoverse`;
    }, [dispatch, figure?.category?.id, figure?.title, id]);

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
                figure,
                quantity: 1,
            })
        );
    };

    const handleClickNextImage = (index) => {
        index < images.length - 1
            ? setCurrentImageIndex(index + 1)
            : setCurrentImageIndex(0);
    };

    const handleClickPreviousImage = (index) => {
        index > 0
            ? setCurrentImageIndex(index - 1)
            : setCurrentImageIndex(images.length - 1);
    };

    const handlePreviewImage = (index) => {
        setCurrentImageIndex(index);
    };

    function shuffle(array) {
        let currentIndex = array.length;

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
    }

    useEffect(() => {
        if (figureList?.length > 0) {
            const figureListShuffled = figureList.filter(
                (figure) => figure.id !== id
            );
            shuffle(figureListShuffled);
            setRelevantFigures(figureListShuffled.slice(0, 4));
        }
    }, [figureList, dispatch, id]);

    return (
        <>
            <div className="grid grid-cols-2 mt-24 gap-x-3">
                <div className="flex items-start gap-x-4">
                    <div className="flex flex-col w-full gap-y-2 max-w-16">
                        {images?.length > 0 &&
                            images.map((image, index) => (
                                <div
                                    className="w-full h-24 cursor-pointer"
                                    key={v4()}
                                    onClick={() => handlePreviewImage(index)}
                                >
                                    <img
                                        src={image}
                                        className="object-cover w-full h-full rounded-md"
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="w-full max-w-[535px] h-[669px] relative overflow-hidden">
                        <img
                            src={images[currentImageIndex]}
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <div className="absolute flex items-center gap-x-2 bottom-6 right-6">
                            <Button
                                onClick={() =>
                                    handleClickPreviousImage(currentImageIndex)
                                }
                                className="p-2 text-black rounded-full bg-slate-200"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" />
                                </svg>
                            </Button>
                            <Button
                                onClick={() =>
                                    handleClickNextImage(currentImageIndex)
                                }
                                className="p-2 text-black rounded-full bg-slate-200"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Heading className="m-0 text-2xl font-semibold text-black">
                        {figure?.title}
                    </Heading>
                    <p className="mt-3 font-medium">{figure?.category?.name}</p>
                    <h5 className="my-6 text-3xl font-semibold text-secondary">
                        {formatPrice}
                    </h5>
                    <div className="flex items-center mb-10 gap-x-3 mt-7">
                        <CustomModal
                            btn={
                                <Button
                                    color="black"
                                    className="w-full text-lg rounded-full max-w-56"
                                >
                                    View Details
                                </Button>
                            }
                            btnClassName="w-full text-lg rounded-full max-w-56"
                            isOpen={openModal}
                            setIsOpen={setOpenModal}
                        >
                            <div className="flex items-start mt-5 mb-8 gap-x-3">
                                <img
                                    src={images[0]}
                                    alt=""
                                    className="object-cover w-20 h-20 rounded-md"
                                />
                                <div className="flex flex-col gap-y-1">
                                    <h5 className="font-medium">
                                        {figure?.title}
                                    </h5>
                                    <span>{formatPrice}</span>
                                </div>
                            </div>
                            <table className="min-w-[400px] border-separate border-spacing-y-1">
                                <tbody>
                                    <tr>
                                        <td className="font-medium text-secondary">
                                            Character:
                                        </td>
                                        <td>{figure["character_name"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-secondary">
                                            Series:
                                        </td>
                                        <td>{figure?.series?.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-secondary">
                                            Manufacturer:
                                        </td>
                                        <td>{figure?.manufacturer?.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-secondary">
                                            Release date:
                                        </td>
                                        <td>{figure["release_date"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-secondary">
                                            Size:
                                        </td>
                                        <td>{figure?.size}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CustomModal>
                        <Button
                            color="secondary"
                            className="w-full text-lg rounded-full max-w-56"
                            onClick={handleAddToCart}
                        >
                            Add to bag
                        </Button>
                    </div>
                    <hr />
                    <h5 className="pb-5 text-xl pt-7 text-medium">
                        Free Delivery
                    </h5>
                    <div className="flex flex-col gap-y-5">
                        <p>
                            Your order of 500.000₫ or more gets free standard
                            delivery.
                        </p>
                        <ul className="px-4 list-disc">
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <p>
                            Orders are processed and delivered Monday-Friday
                            (excluding public holidays)
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Heading className="text-center">You might also like</Heading>
                <CardList list={relevantFigures}></CardList>
            </div>
        </>
    );
};

export default FigureDetailPage;
