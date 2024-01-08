import HeaderLogo from "../modules/header/HeaderLogo";
import HeaderNavList from "../modules/header/HeaderNavList";
import HeaderRight from "../modules/header/HeaderRight";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-10 grid w-full grid-cols-3 px-16 py-4 text-white bg-dark">
            <HeaderLogo></HeaderLogo>
            <HeaderNavList></HeaderNavList>
            <HeaderRight></HeaderRight>
        </div>
    );
};

export default Header;
