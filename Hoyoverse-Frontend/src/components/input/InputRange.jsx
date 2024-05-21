import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import useFormatCurrency from "../../hooks/useFormatCurrency";

const minGap = 0;

const InputRange = ({
    register,
    minName,
    maxName,
    min,
    max,
    minValue,
    maxValue,
}) => {
    const minTooltip = useRef(null);
    const maxTooltip = useRef(null);
    const sliderTrackRef = useRef(null);

    const handleChangeMin = () => {
        if (parseInt(maxValue) - parseInt(minValue) <= minGap) {
            minValue = parseInt(maxValue) - minGap;
        }
    };

    const handleChangeMax = () => {
        if (parseInt(maxValue) - parseInt(minValue) <= minGap) {
            maxValue = parseInt(minValue) + minGap;
        }
    };

    useEffect(() => {
        minTooltip.current.style.left = (minValue / max) * 100 + "%";
        maxTooltip.current.style.right = 100 - (maxValue / max) * 100 + "%";
        sliderTrackRef.current.style.left = (minValue / max) * 100 + "%";
        sliderTrackRef.current.style.right = 100 - (maxValue / max) * 100 + "%";
    }, [maxValue, minValue, max, min]);

    return (
        <div>
            <div className="range-slider">
                <span className="slider-track" ref={sliderTrackRef}></span>
                <input
                    type="range"
                    className="min-val"
                    min={min}
                    max={max}
                    step="100"
                    value={minValue}
                    onInput={handleChangeMin}
                    {...register(minName)}
                />
                <input
                    type="range"
                    className="max-val"
                    min={min}
                    max={max}
                    value={maxValue}
                    step="100"
                    onInput={handleChangeMax}
                    {...register(maxName)}
                />
                <div className="tooltip min-tooltip" ref={minTooltip}>
                    {useFormatCurrency(minValue)}
                </div>
                <div className="tooltip max-tooltip" ref={maxTooltip}>
                    {useFormatCurrency(maxValue)}
                </div>
            </div>
        </div>
    );
};

InputRange.propTypes = {
    max: PropTypes.string,
    maxName: PropTypes.string,
    maxValue: PropTypes.string,
    min: PropTypes.string,
    minName: PropTypes.string,
    minValue: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
};

export default InputRange;
