import "./App.css"
import Container from "./components/Container"
import DynamicComponentRenderer from "./DynamicComponent"
import uiData from "./ui.json"

export const componentsMap = {
  container: Container,
}

function App() {
  return (
    <>
      {uiData.views.map((el) => (
        <DynamicComponentRenderer type={el.type} />
      ))}
    </>
  )
}

export default App
