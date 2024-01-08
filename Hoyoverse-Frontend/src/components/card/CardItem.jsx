import Button from "../button/Button";

const CardItem = () => {
    return (
        <div className="bg-white shadow-lg rounded-xl">
            <div className="w-full h-96">
                <img
                    src="https://product.hstatic.net/200000462939/product/10001_122f68dfcecc4921a9f4de076fe7be5a_master.jpg"
                    alt="Figure"
                    className="object-cover object-top w-full h-full rounded-md"
                />
            </div>
            <div className="flex flex-col gap-3 p-5">
                <h5 className="text-sm font-semibold uppercase text-neutral-400">
                    Honkai Star Rail
                </h5>
                <h3 className="text-xl font-semibold leading-normal text-black line-clamp-2">
                    Black Swan - Honkai Star Rail
                </h3>
                {/* <div className="flex items-center justify-between">
                    <strong className="text-xl text-right text-secondary">
                        2.850.000
                    </strong>
                    <Button className="flex items-center justify-center p-2 text-white rounded-full cursor-pointer bg-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                    </Button>
                </div> */}
                <strong className="text-xl text-right text-secondary">
                    2.850.000
                </strong>
                <Button className="transition-all border border-white hover:bg-transparent hover:border-violet-500 hover:text-violet-500 bg-violet-500">
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default CardItem;
