import DynamicComponentRenderer from "../DynamicComponent"

const Container = ({ style, children }) => {
  return (
    <div style={style}>
      {children.map((node) => (
        <DynamicComponentRenderer key={crypto.randomUUID()} {...node} />
      ))}
    </div>
  )
}

export default Container
