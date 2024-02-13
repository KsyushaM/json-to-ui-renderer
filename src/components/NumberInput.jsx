import { useState } from "react"

const NumberInput = ({ data, styleName, actionClassName }) => {
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <input
      className={actionClassName}
      style={styleName}
      type="number"
      placeholder={data.placeholder}
      value={inputValue}
      onChange={handleInputChange}
      min={data.validation.min}
      max={data.validation.max}
    />
  )
}

export default NumberInput
