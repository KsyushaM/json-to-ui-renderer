import { componentsMap } from "./App"

const DynamicComponentRenderer = ({ type, ...delegated }) => {
  const DynamicComponent = componentsMap[type]
  return <DynamicComponent {...delegated} />
}

export default DynamicComponentRenderer
