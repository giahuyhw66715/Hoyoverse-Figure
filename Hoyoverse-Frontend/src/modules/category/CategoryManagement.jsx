import { Fragment } from "react";
import Heading from "../../components/common/Heading";
import Button from "../../components/button/Button";

const CategoryManagement = () => {
    return (
        <Fragment>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Categories
                    </Heading>
                    <p className="text-sm text-grayDark">
                        Manage your categories
                    </p>
                </div>
                <Button url="/management/add-category">Add New Category</Button>
            </div>
        </Fragment>
    );
};

export default CategoryManagement;
