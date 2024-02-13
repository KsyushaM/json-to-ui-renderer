const Text = ({ data, styleName, actionClassName }) => (
  <p className={actionClassName} style={styleName}>
    {data.value}
  </p>
)

export default Text
