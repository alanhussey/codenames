import allCards, { R, B, X, N, U } from "./data";

function getAtPosition(input, y, x) {
  return input[y][x];
}

export function findMatchingBoards(input, availableData) {
  return availableData.filter(({ board: dataElt }) => {
    return compareBoards(input, dataElt);
  });
}

function compareBoards(boardA, boardB) {
  var ys = [0, 1, 2, 3, 4];
  var xs = [0, 1, 2, 3, 4];
  return ys.every((y) => {
    return xs.every((x) => {
      return comparePosition(boardA, boardB, y, x);
    });
  });
}

function comparePosition(boardA, boardB, y, x) {
  var valA = getAtPosition(boardA, y, x);
  var valB = getAtPosition(boardB, y, x);
  return valA === valB || valA === U || valB === U;
}

export function computeProbabilities(boards) {
  var nBoards = boards.length;
  var ys = [0, 1, 2, 3, 4];
  var xs = [0, 1, 2, 3, 4];
  var initial = {
    [R]: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    [B]: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    [N]: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    [X]: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  };

  var counts = boards.reduce((acc, { board }, idx) => {
    ys.forEach((y) => {
      xs.forEach((x) => {
        var value = getAtPosition(board, y, x);
        acc[value][y][x] = acc[value][y][x] + 1;
      });
    });

    return acc;
  }, initial);

  counts.boards = boards.map(({ id }) => id);
  counts["total"] = nBoards;

  return counts;
}
