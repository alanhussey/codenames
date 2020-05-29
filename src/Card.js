import React from "react";
import { R, B, X, N, U } from "./data";

const colors = {
  [R]: "red",
  [B]: "blue",
  [X]: "black",
  [N]: "antiquewhite",
  [U]: "lightgrey",
};
export default function Card({ card, probabilities, onClick }) {
  return (
    <table>
      <tbody>
        {card.map((row, y) => (
          <tr key={y}>
            {[...row].map((cell, x) => (
              <td
                key={x}
                style={{
                  backgroundColor: colors[cell],
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
                {cell === U && (
                  <>
                    <span style={{ color: colors[R] }}>
                      {Math.round(
                        (probabilities[R][y][x] / probabilities.total) * 100
                      )}
                      %
                    </span>
                    <span style={{ color: colors[B] }}>
                      {Math.round(
                        (probabilities[B][y][x] / probabilities.total) * 100
                      )}
                      %
                    </span>
                    <span style={{ color: colors[X] }}>
                      {Math.round(
                        (probabilities[X][y][x] / probabilities.total) * 100
                      )}
                      %
                    </span>
                    <span style={{ color: colors[N] }}>
                      {Math.round(
                        (probabilities[N][y][x] / probabilities.total) * 100
                      )}
                      %
                    </span>
                  </>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
