import { useEffect } from "react";
import Authentication from "../components/authentication/Authentication";
import Heading from "../components/heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../redux/order/orderSlice";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: "ID",
        selector: (row) => row.id,
    },
    {
        name: "Address",
        selector: (row) => row.address,
    },
    {
        name: "Phone Number",
        selector: (row) => row.phoneNumber,
    },
    {
        name: "Total",
        selector: (row) => row.total,
    },
    {
        name: "Order Date",
        selector: (row) => row.orderDate,
    },
];

const OrderPage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { orderList } = useSelector((state) => state.order);
    useEffect(() => {
        if (user) {
            dispatch(getMyOrders(user?.id));
        }
    }, [dispatch, user]);

    useEffect(() => {
        document.title = "Order - HoYoverse";
    }, []);
    return (
        <Authentication>
            <div className="container">
                <Heading>My Order</Heading>
                <DataTable columns={columns} data={orderList} pagination />
            </div>
        </Authentication>
    );
};

export default OrderPage;
