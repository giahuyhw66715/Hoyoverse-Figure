import { Fragment } from "react";
import Heading from "../../components/common/Heading";
import Button from "../../components/button/Button";

const ImagaManagement = () => {
    return (
        <Fragment>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Images
                    </Heading>
                    <p className="text-sm text-grayDark">
                        Manage your product images
                    </p>
                </div>
                <Button url="/management/add-image">Add New Image</Button>
            </div>
        </Fragment>
    );
};

export default ImagaManagement;
