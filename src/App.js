import React from "react";
import "./App.css";
import data, { R, B, X, N } from "./data";

const card = data[0];

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          {card.map((row, index) => (
            <tr key={index}>
              {[...row].map((cell, index) => (
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
