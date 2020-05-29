import React from "react";
import "./App.css";

const RED = "r";
const BLU = "b";
const EXX = "X";
const BLN = " ";

const card = [
  [BLN, RED, RED, BLU, RED],
  [BLN, BLU, BLN, BLN, BLU],
  [EXX, BLU, BLN, RED, BLN],
  [RED, RED, BLU, BLU, RED],
  [BLU, BLU, BLU, BLN, RED],
];

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          {card.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td
                  key={index}
                  style={{
                    backgroundColor: {
                      [RED]: "red",
                      [BLU]: "blue",
                      [EXX]: "black",
                      [BLN]: "antiquewhite",
                    }[cell],
                  }}
                >
                  {
                    {
                      [RED]: "◇",
                      [BLU]: "⚪",
                      [EXX]: "×",
                      [BLN]: " ",
                    }[cell]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
