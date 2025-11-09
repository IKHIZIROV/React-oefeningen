import React from "react";
import type {Game} from "../types"

interface GameListItemProps {
  game: Game;
}

const GameListItem = (props: GameListItemProps ) => {
  return (
    <React.Fragment key={props.game.id}>
      <h2>{props.game.name} ({props.game.releaseYear})</h2>
      <p>Aantal keer verkocht: {props.game.sales}</p>
    </React.Fragment>
  )
}

export default GameListItem