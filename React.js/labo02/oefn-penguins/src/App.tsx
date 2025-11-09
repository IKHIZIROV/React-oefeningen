import PenguinCard from "./components/penguin"
import penguins from "./penguins.json"
import styles from "./App.module.css"

function App() {

  const femalePenguins = penguins.filter((p) => p.gender === "Female")

  return (
    <>
      <div className={styles.grid}>
      {femalePenguins.map((pen) => (
        <PenguinCard key={pen.id} penguin={pen} />
      ))}
    </div>
    </>
  )
}

export default App
