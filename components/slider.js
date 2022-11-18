import ReactSlider from 'react-slider'
import { useState } from 'react'

const Slider = ({ onChange }) => {
  return (
    <ReactSlider
      className="customSlider"
      trackClassName="customSlider-track"
      thumbClassName="customSlider-thumb"
      min={0}
      max={20}
      onChange={onChange}
    />
  )
}

export default Slider
