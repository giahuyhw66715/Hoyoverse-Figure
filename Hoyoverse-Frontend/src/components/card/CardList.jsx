import PropTypes from "prop-types";
import CardItem from "./CardItem";

const CardList = ({ figures }) => {
    return (
        <div className="container grid grid-cols-4 gap-5">
            {figures?.length > 0 &&
                figures.map((figure) => (
                    <CardItem key={figure?.id} figure={figure}></CardItem>
                ))}
        </div>
    );
};

CardList.propTypes = {
    figures: PropTypes.array,
};

export default CardList;
