import allCards, { R, B, X, N, U } from "./data";

function getAtPosition(input, y, x) {
  return input[y][x];
}

function findMatchingBoardsf(input, availableData) {
  return availableData.filter(dataElt => {
    return compareBoards(input, dataElt);
  });
}

function compareBoards(boardA, boardB) {
  var ys = [0, 1, 2, 3, 4];
  var xs = [0, 1, 2, 3, 4];
  return ys.every(y => {
    return xs.every(x => {
      return comparePosition(boardA, boardB, y, x);
    });
  });
}

function comparePosition(boardA, boardB, y, x) {
  var valA = getAtPosition(boardA, y, x);
  var valB = getAtPosition(boardB, y, x);
  return (valA === valB) || (valA === U) || (valB === U);
}

function computeProbabilites(boards) {
  var nBoards = boards.length;
  var ys = [0, 1, 2, 3, 4];
  var xs = [0, 1, 2, 3, 4];
  var initial = {
    r: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
    b: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
    w: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
    k: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
  };

  var counts = boards.reduce((acc, board, idx) => {
    ys.forEach(y => {
      xs.forEach(x => {
        var value = getAtPosition(board, y, x);
        acc[value][y][x] = acc[value][y][x] + 1;
      });
    });

    return acc;
  }, initial);

  counts["total"] = nBoards;

  return counts;
}
