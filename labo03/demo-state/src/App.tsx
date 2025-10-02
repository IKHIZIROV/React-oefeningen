import './App.css'
import { useState } from "react"

function App() {
  const [name, setName] = useState<string>("");
  const [lightStatus, setLightStatus] = useState<boolean>(false)

  return (
    <>
      <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} value={name}/>
      <input type="checkbox" onChange={(e) => {setLightStatus(e.target.checked)}} checked={lightStatus}/>

      <div className={`square ${lightStatus ? "lightOn" : "lightOff"}`} />

      <button onClick={() => { setName("")}}>CLEAR</button>
    </>
  )
}

export default App
