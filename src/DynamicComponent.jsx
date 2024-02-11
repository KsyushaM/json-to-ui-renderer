import { componentsMap } from "./App"

const DynamicComponentRenderer = ({ type }) => {
  const DynamicComponent = componentsMap[type]
  return <DynamicComponent />
}

export default DynamicComponentRenderer
