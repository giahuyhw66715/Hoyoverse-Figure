import DataTable from "react-data-table-component";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteSeries, getSeriesList } from "../../redux/series/seriesSlice";
import EditIcon from "../../components/icon/EditIcon";
import TrashIcon from "../../components/icon/TrashIcon";
import { NavLink } from "react-router-dom";

const SeriesAdmin = () => {
    const dispatch = useDispatch();
    const { seriesList } = useSelector((state) => state.series);
    useEffect(() => {
        dispatch(getSeriesList());
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
                            to={`/admin/series/edit-series/${row.id}`}
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
        dispatch(deleteSeries(id));
    };

    return (
        <div>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Series
                    </Heading>
                    <p className="text-sm">Manage your series</p>
                </div>
                <Button url="/admin/series/add-series" color="primary">
                    Add New Series
                </Button>
            </div>
            <div className="mt-5">
                <DataTable columns={columns} data={seriesList} pagination />
            </div>
        </div>
    );
};

export default SeriesAdmin;
