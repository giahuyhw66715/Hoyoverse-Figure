import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Heading from "../../components/heading/Heading";
import useFormatCurrency from "../../hooks/useFormatCurrency";
import { deleteOrder, getAllOrders } from "../../redux/order/orderSlice";
import { NavLink } from "react-router-dom";
import TrashIcon from "../../components/icon/TrashIcon";
import EyeIcon from "../../components/icon/EyeIcon";

const OrderAdmin = () => {
    const dispatch = useDispatch();
    const { orderList } = useSelector((state) => state.order);
    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

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
            // eslint-disable-next-line react-hooks/rules-of-hooks
            selector: (row) => useFormatCurrency(row.total),
        },
        {
            name: "Order Date",
            selector: (row) => row.orderDate,
        },
        {
            name: "Actions",
            selector: (row) => {
                return (
                    <div className="flex items-center gap-x-3">
                        <NavLink
                            to={`/orders/${row.id}`}
                            className="cursor-pointer hover:text-secondary transition-all"
                        >
                            <EyeIcon></EyeIcon>
                        </NavLink>
                        <span
                            className="cursor-pointer hover:text-secondary transition-all"
                            onClick={() => handleDelete(row.id)}
                        >
                            <TrashIcon></TrashIcon>
                        </span>
                    </div>
                );
            },
        },
    ];

    const handleDelete = (id) => {
        dispatch(deleteOrder(id));
    };
    return (
        <div>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Orders
                    </Heading>
                    <p className="text-sm">Manage your orders</p>
                </div>
            </div>
            <div className="mt-5">
                <DataTable columns={columns} data={orderList} pagination />
            </div>
        </div>
    );
};

export default OrderAdmin;
