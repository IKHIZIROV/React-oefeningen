import './App.css'
import ColorSquare from './components/colorSquare'

function App() {
  const colors = ["red", "green", "blue", "orange", "purple", "pink", "yellow", "brown", "black", "cyan"];

  return (
    <>
      {colors.map((color, i) => (
        <ColorSquare key={i} color={color}/>
      ))}
    </>
  )
}

export default App
