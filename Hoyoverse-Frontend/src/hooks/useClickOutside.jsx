import { useDispatch } from "react-redux";
import { closeDropdown } from "../redux/dropdown/dropdownSlice";
import { useEffect } from "react";

export default function useClickOutside(ref, name) {
    const dispatch = useDispatch();
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            dispatch(closeDropdown(name));
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
}
