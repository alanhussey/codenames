import React from "react";
import "./App.css";
import allCards, { cards } from "./data";
import Card from "./Card";

const card = allCards[0];

function App() {
  return (
    <div className="App">
      There are {cards.length} known boards, for a total of {allCards.length}{" "}
      with rotations
      <Card card={card} />
    </div>
  );
}

export default App;
