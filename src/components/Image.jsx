const Image = ({ data, styleName, actionClassName }) => (
  <img src={data.value} className={actionClassName} style={styleName} />
)

export default Image
