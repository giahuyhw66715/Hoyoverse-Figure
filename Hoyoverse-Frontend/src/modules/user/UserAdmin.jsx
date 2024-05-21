import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserList } from "../../redux/user/userSlice";
import DataTable from "react-data-table-component";
import Heading from "../../components/heading/Heading";
import EditIcon from "../../components/icon/EditIcon";
import TrashIcon from "../../components/icon/TrashIcon";
import { NavLink } from "react-router-dom";

const UserAdmin = () => {
    const dispatch = useDispatch();
    const { userList } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUserList());
    }, [dispatch]);

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
        },
        {
            name: "Full Name",
            selector: (row) => row.fullName,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Role",
            selector: (row) => row.role,
        },
        {
            name: "Actions",
            selector: (row) => {
                return (
                    <div className="flex items-center gap-x-3">
                        <NavLink
                            to={`/admin/users/edit-user/${row.id}`}
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
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Users
                    </Heading>
                    <p className="text-sm">Manage your users</p>
                </div>
            </div>
            <div className="mt-5">
                <DataTable columns={columns} data={userList} pagination />
            </div>
        </div>
    );
};

export default UserAdmin;
