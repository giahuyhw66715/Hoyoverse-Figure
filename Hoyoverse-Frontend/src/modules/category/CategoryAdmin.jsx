import DataTable from "react-data-table-component";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    deleteCategory,
    getCategoryList,
} from "../../redux/category/categorySlice";
import EditIcon from "../../components/icon/EditIcon";
import TrashIcon from "../../components/icon/TrashIcon";
import { NavLink } from "react-router-dom";

const CategoryAdmin = () => {
    const dispatch = useDispatch();
    const { categoryList } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(getCategoryList());
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
                            to={`/admin/categories/edit-category/${row.id}`}
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
        dispatch(deleteCategory(id));
    };
    return (
        <div>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Category
                    </Heading>
                    <p className="text-sm">Manage your categories</p>
                </div>
                <Button url="/admin/categories/add-category" color="primary">
                    Add New Category
                </Button>
            </div>
            <div className="mt-5">
                <DataTable columns={columns} data={categoryList} pagination />
            </div>
        </div>
    );
};

export default CategoryAdmin;
