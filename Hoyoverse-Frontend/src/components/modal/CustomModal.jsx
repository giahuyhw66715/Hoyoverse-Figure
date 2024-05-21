import PropTypes from "prop-types";
import Modal from "react-modal";
import { twMerge } from "tailwind-merge";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

const CustomModal = ({ btn, btnClassName, isOpen, setIsOpen, children }) => {
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            {btn && (
                <div
                    onClick={openModal}
                    className={twMerge(`cursor-pointer ${btnClassName}`)}
                >
                    {btn}
                </div>
            )}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <span className="cursor-pointer" onClick={closeModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-auto"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </span>
                {children}
            </Modal>
        </>
    );
};

CustomModal.propTypes = {
    btn: PropTypes.any,
    btnClassName: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
};

export default CustomModal;
