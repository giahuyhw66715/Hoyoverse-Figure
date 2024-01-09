import { Fragment } from "react";
import Heading from "../../components/common/Heading";
import Button from "../../components/button/Button";

const UserManagement = () => {
    return (
        <Fragment>
            <div className="flex items-start justify-between">
                <div>
                    <Heading className="mt-0 mb-3 text-left text-black">
                        Figures
                    </Heading>
                    <p className="text-sm text-grayDark">Manage your users</p>
                </div>
                <Button>Add New User</Button>
            </div>
        </Fragment>
    );
};

export default UserManagement;
