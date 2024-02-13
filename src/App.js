import "./App.css"
import Container from "./components/Container"
import Text from "./components/Text"
import DynamicComponentRenderer from "./DynamicComponent"
import ButtonSelect from "./components/ButtonSelect"
import NumberInput from "./components/NumberInput"
import Image from "./components/Image"
import uiData from "./ui.json"

export const componentsMap = {
  container: Container,
  text: Text,
  buttonSelect: ButtonSelect,
  numberInput: NumberInput,
  image: Image,
}

function App() {
  return (
    <>
      {uiData.views.map((node) => (
        <DynamicComponentRenderer key={crypto.randomUUID()} {...node} />
      ))}
    </>
  )
}

export default App
