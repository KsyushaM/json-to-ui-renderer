const ButtonSelect = ({ data, styleName, actionClassName }) => (
  <button
    className={actionClassName}
    style={styleName}
    onClick={() => console.log(data.value)}
  >
    {data.value}
  </button>
)

export default ButtonSelect
