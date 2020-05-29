import React from "react";
import "./App.css";
import allCards, { card, cards } from "./data";
import Card from "./Card";
import { R, B, X, N, U } from "./data";

function nextCell(cell) {
  const all = [R, B, N, X, U, R];
  const index = all.indexOf(cell);
  return all[index + 1];
}

function App() {
  const [state, setState] = React.useState(card`
  uuuuu
  uuuuu
  uuuuu
  uuuuu
  uuuuu
  `);

  return (
    <div className="App">
      There are {cards.length} known boards, for a total of {allCards.length}{" "}
      with rotations
      <Card
        card={state}
        onClick={(x, y) => {
          const newState = state.map((row, stateY) =>
            stateY === y
              ? [...row].map((cell, stateX) =>
                  stateX === x ? nextCell(cell) : cell
                )
              : row
          );
          setState(newState);
        }}
      />
    </div>
  );
}

export default App;
