import PropTypes from "prop-types";
import CardItem from "./CardItem";

const CardList = ({ list }) => {
    return (
        <div className={`grid grid-cols-4 gap-5`}>
            {list?.length > 0 &&
                list.map((item) => (
                    <CardItem key={item?.id} item={item}></CardItem>
                ))}
        </div>
    );
};

CardList.propTypes = {
    cols: PropTypes.string,
    list: PropTypes.array,
};

export default CardList;
