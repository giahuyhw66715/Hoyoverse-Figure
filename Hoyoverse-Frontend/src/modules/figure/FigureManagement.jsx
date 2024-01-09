import { Fragment } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/common/Heading";

const FigureManagement = () => {
    return (
        <Fragment>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Figures
                    </Heading>
                    <p className="text-sm text-grayDark">Manage your figures</p>
                </div>
                <Button url="/management/add-figure">Add New Figure</Button>
            </div>
        </Fragment>
    );
};

export default FigureManagement;
