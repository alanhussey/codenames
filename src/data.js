import rotate from "./rotate";

export const R = "r";
export const B = "b";
export const X = "k";
export const N = "w";
export const U = "u";

let id = 0;
export function card([str]) {
  return {
    id: String(id++),
    board: str
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0),
  };
}

const cards = [
  card`
  bbwww
  bbrrw
  wkbrb
  rrwrb
  rbrwb
  `,

  card`
  wrbrr
  bwbwk
  wrbrw
  bwrbr
  wbbrr
  `,

  card`
  wrbbr
  wbrrw
  bbkrb
  rbwwb
  wwrrr
  `,

  card`
  bwrrr
  rbwrw
  wbbbb
  bkwwr
  rwbrb
  `,

  card`
  rbwrw
  rrwbr
  brkwb
  wbbrw
  brwbb
  `,

  card`
  bwrwb
  wbbrk
  bwrrb
  rwrrb
  rbwrw
  `,

  card`
  wrbwb
  rrbrr
  bbwww
  bwkrb
  rbwrr
  `,

  card`
  brrbb
  wbwbr
  bwrww
  rrbbw
  brrwk
  `,

  card`
  wrrbr
  bwrbw
  bwwwb
  rrwkr
  rrbbb
  `,

  card`
  bbwwb
  rrbrw
  rbbrb
  wkwwr
  rwrbr
  `,

  card`
  rrwrb
  bbwbw
  wrkrb
  brrbw
  wbwbr
  `,

  card`
  wbrwb
  kwrbr
  rrwbb
  rrbrw
  wwbrb
  `,

  card`
  bbwrw
  rbbwb
  rbrbw
  rrbrw
  bwkwr
  `,

  card`
  wbbrw
  rwwwr
  bwbrb
  rrbwk
  rbbbr
  `,

  card`
  bwrbr
  kbbbr
  wrrwr
  rbwbr
  wbwrw
  `,

  card`
  bbkrw
  brbrb
  rrwwr
  wrbrr
  bwwwb
  `,

  card`
  rbwbr
  rbrwr
  bwbbr
  wbkwr
  rrwwb
  `,

  card`
  brkwr
  wrbrw
  wrbbw
  bbrwb
  rwbrr
  `,

  card`
  kwrbw
  wrbwb
  brbrb
  rwbwr
  bwrrb
  `,

  card`
  rbwbb
  krwrb
  bwwbw
  rrrwr
  wrbbb
  `,

  card`
  rbrrw
  wbwbw
  rrwrr
  rrbbb
  wwbbk
  `,

  card`
  rbwwb
  bwbwr
  brrrk
  rbrrb
  wwbbw
  `,

  card`
  wbrrb
  bbwrw
  rbrbr
  wbrwb
  rwbkw
  `,

  card`
  bwwbw
  brrbb
  brwbr
  brwkr
  rwrbw
  `,

  card`
  wbrbr
  rrbbw
  rbwrb
  rwbrw
  bwwbk
  `,

  card`
  brkww
  brbbr
  bbwwr
  wbrwb
  rrwbr
  `,

  card`
  brwbb
  rwbrr
  wbbwr
  rkwwr
  bbrbw
  `,

  card`
  rwbbr
  wrbrw
  brbwr
  wbrbb
  wkbwr
  `,

  card`
  wbwrb
  rwwrr
  rbrwb
  bwbrb
  krbwr
  `,

  card`
  wwrww
  rrbbb
  wrrwk
  brbrr
  bbrwb
  `,

  card`
  rrwbr
  wbwwb
  rrrrw
  rbbrk
  bwbbr
  `,

  card`
  rrwwb
  rrkrb
  rbbrb
  wwrwr
  bbwwb
  `,

  card`
  rkwrw
  bbwbr
  rrrbr
  wrwbb
  wrbwb
  `,

  card`
  rbrbw
  wbrwr
  wrrkb
  rwbwb
  wbbrb
  `,

  card`
  rbbwr
  rbrbb
  wbwrw
  wwkbw
  bbrrr
  `,

  card`
  wwrrk
  brwbw
  brbwr
  bwrwb
  rrrbb
  `,

  card`
  brbwr
  wrbbb
  rwkrw
  bwrrb
  wrwrb
  `,

  card`
  rwrww
  rwbbw
  rrrwb
  bbbkr
  wbrbr
  `,

  card`
  rbrrb
  wbrww
  rwbbb
  wbwbr
  brrkw
  `,

  card`
  wbrwr
  rbrrw
  rbrbb
  kwwbb
  wbrwb
  `,
];

export { cards };

const allCards = cards.flatMap((card) => {
  const cards = [card];

  let rotations = 3;
  let rotated = card.board;
  while (rotations--) {
    rotated = rotate(rotated);
    cards.push({
      id: `${card.id}-${{ 2: "b", 1: "c", 0: "d" }[rotations]}`,
      board: rotated,
    });
  }
  return cards;
});

export default allCards;
