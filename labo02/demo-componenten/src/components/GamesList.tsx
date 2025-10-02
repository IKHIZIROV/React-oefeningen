import type {Game} from "../types"
import GameListItem from "./GameListItems";

interface GameListProps {
  games: Game[];
}

const GamesList = (props: GameListProps) => {
  return (
    <div>
      {props.games.map((game: Game) => <GameListItem game={game}/>)}
    </div>
  );}

export default GamesList