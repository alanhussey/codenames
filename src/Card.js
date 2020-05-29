import React from "react";
import { R, B, X, N, U } from "./data";

export default function Card({ card, onClick }) {
  return (
    <table>
      <tbody>
        {card.map((row, y) => (
          <tr key={y}>
            {[...row].map((cell, x) => (
              <td
                key={x}
                style={{
                  backgroundColor: {
                    [R]: "red",
                    [B]: "blue",
                    [X]: "black",
                    [N]: "antiquewhite",
                    [U]: "lightgrey",
                  }[cell],
                }}
                data-type={
                  {
                    [R]: "◇",
                    [B]: "⚪",
                    [X]: "×",
                  }[cell] || ""
                }
              >
                <button
                  type="button"
                  style={{
                    width: "20vw",
                    height: "20vw",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    lineHeight: 0.5,
                    backgroundColor: "transparent",
                  }}
                  onClick={() => onClick(x, y)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
