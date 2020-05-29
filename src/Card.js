import React from "react";
import { R, B, X, N } from "./data";

export default function Card({ card }) {
  return (
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
  );
}
