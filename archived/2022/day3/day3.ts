import _ from 'lodash';

const parseString = (input: string): string[] => input.split('\n');

const Score: { [key: string]: number } = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52
};

const scoreItem = (character: string): number => Score[character];

export function part1 (input: string): number {
  const rucksacks = parseString(input).map((rucksack) => [rucksack.substring(0, rucksack.length / 2), rucksack.substring(rucksack.length / 2)]);
  let score = 0;
  for (const rucksack of rucksacks) {
    const duplicateItem = _.intersection(rucksack[0].split(''), rucksack[1].split(''))[0];
    score += scoreItem(duplicateItem);
  }
  return score;
}

export function part2 (input: string): number {
  const rucksacks = parseString(input);
  let score = 0;
  for (let i = 0; i < rucksacks.length; i += 3) {
    const rucksack1 = rucksacks[i];
    const rucksack2 = rucksacks[i + 1];
    const rucksack3 = rucksacks[i + 2];
    const duplicateItem = _.intersection(rucksack1.split(''), rucksack2.split(''), rucksack3.split(''))[0];
    score += scoreItem(duplicateItem);
  }
  return score;
}
