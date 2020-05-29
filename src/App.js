import React from "react";
import "./App.css";

const R = "r";
const B = "b";
const X = "X";
const N = " ";

const card = [
  [N, R, R, B, R],
  [N, B, N, N, B],
  [X, B, N, R, N],
  [R, R, B, B, R],
  [B, B, B, N, R],
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
                      [R]: "red",
                      [B]: "blue",
                      [X]: "black",
                      [N]: "antiquewhite",
                    }[cell],
                  }}
                >
                  {
                    {
                      [R]: "◇",
                      [B]: "⚪",
                      [X]: "×",
                      [N]: " ",
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
