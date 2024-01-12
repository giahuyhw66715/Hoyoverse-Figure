import { useEffect } from "react";
import CardItem from "./CardItem";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";

const CardList = () => {
    const dispatch = useDispatch();
    useEffect(() => {});
    return (
        <div className="container grid grid-cols-4 gap-5">
            {Array(8)
                .fill(0)
                .map((item) => (
                    <CardItem key={v4()}></CardItem>
                ))}
        </div>
    );
};

export default CardList;
