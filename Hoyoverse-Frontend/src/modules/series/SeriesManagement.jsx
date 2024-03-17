import { Fragment } from "react";
import Heading from "../../components/common/Heading";
import Button from "../../components/button/Button";

const SeriesManagement = () => {
    return (
        <Fragment>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Series
                    </Heading>
                    <p className="text-sm text-grayDark">Manage your series</p>
                </div>
                <Button url="/management/series/add-series">
                    Add New Series
                </Button>
            </div>
        </Fragment>
    );
};

export default SeriesManagement;
