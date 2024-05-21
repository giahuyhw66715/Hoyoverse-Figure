import DataTable from "react-data-table-component";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    deleteManufacturer,
    getManufacturerList,
} from "../../redux/manufacturer/manufacturerSlice";
import EditIcon from "../../components/icon/EditIcon";
import TrashIcon from "../../components/icon/TrashIcon";
import { NavLink } from "react-router-dom";

const ManufacturerAdmin = () => {
    const dispatch = useDispatch();
    const { manufacturerList } = useSelector((state) => state.manufacturer);
    useEffect(() => {
        dispatch(getManufacturerList());
    }, [dispatch]);

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Actions",
            selector: (row) => {
                return (
                    <div className="flex items-center gap-x-3">
                        <NavLink
                            to={`/admin/manufacturers/edit-manufacturer/${row.id}`}
                            className="cursor-pointer hover:text-secondary transition-all"
                        >
                            <EditIcon></EditIcon>
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
        dispatch(deleteManufacturer(id));
    };
    return (
        <div>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Manufacturers
                    </Heading>
                    <p className="text-sm">Manage your manufacturers</p>
                </div>
                <Button
                    url="/admin/manufacturers/add-manufacturer"
                    color="primary"
                >
                    Add New Manufacturer
                </Button>
            </div>
            <div className="mt-5">
                <DataTable
                    columns={columns}
                    data={manufacturerList}
                    pagination
                />
            </div>
        </div>
    );
};

export default ManufacturerAdmin;
