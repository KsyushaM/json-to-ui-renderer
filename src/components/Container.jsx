import DynamicComponentRenderer from "../DynamicComponent"

const Container = ({ actionClassName, styleName, children }) => {
  return (
    <div className={actionClassName} style={styleName}>
      {children.map((node) => (
        <DynamicComponentRenderer key={crypto.randomUUID()} {...node} />
      ))}
    </div>
  )
}

export default Container
