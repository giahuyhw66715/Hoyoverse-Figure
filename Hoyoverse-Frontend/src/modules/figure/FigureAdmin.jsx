import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteFigure, getFigureList } from "../../redux/figure/figureSlice";
import useFormatCurrency from "../../hooks/useFormatCurrency";
import TrashIcon from "../../components/icon/TrashIcon";
import EditIcon from "../../components/icon/EditIcon";
import { NavLink } from "react-router-dom";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";

const FigureAdmin = () => {
    const dispatch = useDispatch();
    const { figureList } = useSelector((state) => state.figure);
    const { control, handleSubmit } = useForm();

    const handleFilter = (values) => {
        dispatch(
            getFigureList({
                ...values,
            })
        );
    };

    useEffect(() => {
        dispatch(getFigureList());
    }, [dispatch]);

    const columns = [
        {
            name: "ID",
            sortable: true,
            selector: (row) => row.id,
        },
        {
            name: "Character Name",
            sortable: true,
            selector: (row) => row.character_name,
        },
        {
            name: "Price",
            sortable: true,
            // eslint-disable-next-line react-hooks/rules-of-hooks
            selector: (row) => useFormatCurrency(row.price),
        },
        {
            name: "Release Date",
            sortable: true,
            selector: (row) => row.release_date,
        },
        {
            name: "Size",
            sortable: true,
            selector: (row) => row.size,
        },
        {
            name: "Title",
            sortable: true,
            selector: (row) => row.title,
        },
        {
            name: "Available Quantity",
            sortable: true,
            selector: (row) => row.available_quantity,
        },
        {
            name: "Total Quantity",
            sortable: true,
            selector: (row) => row.total_quantity,
        },
        {
            name: "Actions",
            selector: (row) => {
                return (
                    <div className="flex items-center gap-x-3">
                        <NavLink
                            to={`/admin/figures/edit-figure/${row.id}`}
                            className="cursor-pointer hover:text-secondary transition-all"
                        >
                            <EditIcon></EditIcon>
                        </NavLink>
                        <span
                            className="cursor-pointer hover:text-secondary transition-all"
                            onClick={() => handleDelete(row.id, row.image.id)}
                        >
                            <TrashIcon></TrashIcon>
                        </span>
                    </div>
                );
            },
        },
    ];

    const handleDelete = (figureId, imageId) => {
        dispatch(deleteFigure({ figureId, imageId }));
    };

    return (
        <div>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Figures
                    </Heading>
                    <p className="text-sm text-grayDark">Manage your figures</p>
                </div>
                <Button url="/admin/figures/add-figure" color="primary">
                    Add New Figure
                </Button>
            </div>
            <form
                onSubmit={handleSubmit(handleFilter)}
                className="mt-5 text-right"
            >
                <Input
                    className="text-black w-full max-w-md"
                    placeholder="Search"
                    control={control}
                    name="title"
                ></Input>
            </form>
            <div className="mt-8">
                <DataTable columns={columns} data={figureList} pagination />
            </div>
        </div>
    );
};

export default FigureAdmin;
