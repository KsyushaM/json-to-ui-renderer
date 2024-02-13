import { componentsMap } from "./App"

const DynamicComponentRenderer = ({ type, style, ...delegated }) => {
  const combinedStyles = {
    ...style.webStyle,
    "--hover-color": style.actions.onHover.color,
    "--hover-bg-color": style.actions.onHover.backgroundColor,
    "--focus-color": style.actions.onFocus.color,
    "--focus-bg-color": style.actions.onFocus.backgroundColor,
  }
  const DynamicComponent = componentsMap[type]

  return (
    <DynamicComponent
      actionClassName="actionClass"
      styleName={combinedStyles}
      {...delegated}
    />
  )
}

export default DynamicComponentRenderer
