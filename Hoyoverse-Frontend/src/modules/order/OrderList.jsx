import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const OrderList = () => {
    const { order } = useSelector((state) => state.order);
    return (
        <div className="flex flex-col gap-5">
            {order.orderItems?.map((item) => (
                <OrderItem key={item?.id} item={item}></OrderItem>
            ))}
        </div>
    );
};

export default OrderList;
