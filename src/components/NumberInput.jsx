import { useState } from "react"

const NumberInput = ({ data, style }) => {
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div style={style.webStyle}>
      <label>{data.labelText}:</label>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min={data.validation.min}
        max={data.validation.max}
      />
      <p>{data.validation.text}</p>
    </div>
  )
}

export default NumberInput
