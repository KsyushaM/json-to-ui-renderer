import DynamicComponentRenderer from "../DynamicComponent"
const Container = ({ style, children }) => {
  return (
    <div style={style}>
      {children.map((node) => (
        <DynamicComponentRenderer {...node} />
      ))}
    </div>
  )
}

export default Container
