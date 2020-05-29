import React from "react";
import "./App.css";
import data from "./data";
import Card from "./Card";

const card = data[0];

function App() {
  return (
    <div className="App">
      <Card card={card} />
    </div>
  );
}

export default App;
