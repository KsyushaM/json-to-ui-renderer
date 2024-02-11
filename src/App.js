import "./App.css"
import Container from "./components/Container"
import Text from "./components/Text"
import DynamicComponentRenderer from "./DynamicComponent"
import uiData from "./ui.json"

export const componentsMap = {
  container: Container,
  text: Text,
}

function App() {
  return (
    <>
      {uiData.views.map((node) => (
        <DynamicComponentRenderer {...node} />
      ))}
    </>
  )
}

export default App
