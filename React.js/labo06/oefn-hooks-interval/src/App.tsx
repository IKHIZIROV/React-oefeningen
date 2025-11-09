import CurrentTime from "./components/CurrentTime"
import RandomValue from "./components/RandomValue"
import Timer from "./components/Timer"

function App() {

  return (
    <>
      <Timer/>
      <CurrentTime/>
      <RandomValue min={10} max={50}/>
      <RandomValue min={5} max={100}/>
    </>
  )
}

export default App
