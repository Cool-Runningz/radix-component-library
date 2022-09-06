import React from 'react'
import PropTypes from "prop-types"
import "./RangeInput.css"
import * as SliderPrimitive from '@radix-ui/react-slider';

const RangeInput = (props) => {
    return (
        <SliderPrimitive.Root
            className="rootSlider"
            value={props.value}
            onValueChange={props.onValueChange}
        >
            <SliderPrimitive.Track className="trackSlider">
                <SliderPrimitive.Range className="rangeSlider" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="thumbSlider" aria-label={props.label}
            />
        </SliderPrimitive.Root>
    )
}
export default RangeInput

RangeInput.propTypes = {
    /** Applied as the aria-label value of the element with the "slider" role  */
    label: PropTypes.string.isRequired,
    /** The controlled value of the slider. */
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
    /** Event handler called when the value changes. */
    onValueChange: PropTypes.func.isRequired
}