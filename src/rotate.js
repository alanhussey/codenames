import range from "./range";

export default function rotate(card) {
  return Array.from(range(0, 5), (j) =>
    Array.from(range(4, -1), (i) => card[i][j]).join("")
  );
}
