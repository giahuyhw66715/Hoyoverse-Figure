import { Fragment } from "react";
import Heading from "../../components/common/Heading";
import Button from "../../components/button/Button";

const BrandManagement = () => {
    return (
        <Fragment>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Brands
                    </Heading>
                    <p className="text-sm text-grayDark">Manage your brands</p>
                </div>
                <Button url="/management/brand/add-brand">Add New Brand</Button>
            </div>
        </Fragment>
    );
};

export default BrandManagement;
