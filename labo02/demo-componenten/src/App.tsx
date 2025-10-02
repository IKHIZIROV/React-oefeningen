import type {Game} from "./types"
import GamesList from "./components/GamesList";
import ColorSquare from "./components/ColorSquare";

const App = () => {
  const games : Game[] = [
    {
      id: 0,
      name: "World of Warcraft",
      releaseYear: 2004,
      sales: 5
    },
    {
      id: 1,
      name: "Valheim",
      releaseYear: 2021,
      sales: 10
    },
    {
      id: 2,
      name: "Minecraft",
      releaseYear: 2011,
      sales: 20
    }
  ]

  const thomasGames : Game[] = [
    {
      id: 0,
      name: "Minecraft",
      releaseYear: 2009,
      sales: 10000
    },
    {
      id: 1,
      name: "Assassin's Creed III",
      releaseYear: 2013,
      sales: 900000
    },
    {
      id: 2,
      name: "Dead by Daylight",
      releaseYear: 2016,
      sales: 35000
    },
    { 
      id: 3,
      name: "Destiny",
      releaseYear: 2007,
      sales: 75000
    }
  ]

  return (
    <div>
        <h1>Welcome to the H20 game shop</h1>
        <p>mijn games</p>
        <GamesList games={games}/>
        <p>thomas' games</p>
        <GamesList games={thomasGames}/>

        <ColorSquare color="cyan"/>
    </div>
  );}

export default App;

