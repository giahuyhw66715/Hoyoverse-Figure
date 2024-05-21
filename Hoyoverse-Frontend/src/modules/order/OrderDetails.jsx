import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/auth";
import { useEffect } from "react";
import { getOrderById } from "../../redux/order/orderSlice";
import Authentication from "../../components/authentication/Authentication";
import Heading from "../../components/heading/Heading";
import { useParams } from "react-router-dom";
import useFormatCurrency from "../../hooks/useFormatCurrency";
import OrderList from "./OrderList";

const OrderDetails = () => {
    const { order } = useSelector((state) => state.order);
    const { id } = useParams();

    const dispatch = useDispatch();
    const { accessToken } = getToken();

    useEffect(() => {
        dispatch(getOrderById(id));
    }, [accessToken, dispatch, id]);

    return (
        <Authentication>
            <div className="container">
                <div className="grid grid-cols-3 gap-x-5">
                    <div className="col-span-2">
                        <Heading>Bag</Heading>
                        <OrderList></OrderList>
                    </div>
                    <div className="pl-10">
                        <Heading>Summary</Heading>
                        <div className="flex items-center justify-between">
                            <span>Total</span>
                            <span>{useFormatCurrency(order.total)}</span>
                        </div>
                        <hr className="mt-4 mb-8" />
                    </div>
                </div>
            </div>
        </Authentication>
    );
};

export default OrderDetails;
