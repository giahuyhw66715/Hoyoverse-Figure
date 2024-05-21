import PackageIcon from "../../components/icon/PackageIcon";
import PaymentIcon from "../../components/icon/PaymentIcon";
import PlaneIcon from "../../components/icon/PlaneIcon";

const HomePolicy = () => {
    return (
        <div className="bg-[#f8f8f8] flex items-center justify-evenly py-20">
            <div className="flex flex-col items-center gap-y-3">
                <span>
                    <PackageIcon></PackageIcon>
                </span>
                <strong>Authentic Product</strong>
                <p>Import directly from Japan</p>
            </div>
            <div className="flex flex-col items-center gap-y-3">
                <span>
                    <PaymentIcon></PaymentIcon>
                </span>
                <strong>Simple Payment</strong>
                <p>Cash on delivery or online</p>
            </div>
            <div className="flex flex-col items-center gap-y-3">
                <span>
                    <PlaneIcon></PlaneIcon>
                </span>
                <strong>Express delivery</strong>
                <p>Free for orders over 500.000₫</p>
            </div>
        </div>
    );
};

export default HomePolicy;
