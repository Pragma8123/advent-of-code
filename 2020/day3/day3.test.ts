import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";

import { readInputFile } from "../readInputFile.ts";

import { countTrees, Vect } from "./day3.ts";

const input = readInputFile("day3/input.txt");
const exampleInput = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

Deno.test("Day 3 - Part 1 - Example 1", () => {
  assertEquals(countTrees(exampleInput, new Vect(3, 1)), 7);
});

// Deno.test("Day 3 - Part 1 - Example 2", () => {
//   assertEquals(isValidPassword(exampleInputs[1]), false);
// });

// Deno.test("Day 3 - Part 1 - Example 3", () => {
//   assertEquals(isValidPassword(exampleInputs[2]), true);
// });

Deno.test("Day 3 - Part 1 - Answer", () => {
  assertEquals(countTrees(input, new Vect(3, 1)), 250);
});

// Deno.test("Day 3 - Part 2 - Example 1", () => {
//   assertEquals(isValidPassword(exampleInputs[0], policy2), true);
// });

// Deno.test("Day 3 - Part 2 - Example 2", () => {
//   assertEquals(isValidPassword(exampleInputs[1], policy2), false);
// });

// Deno.test("Day 3 - Part 2 - Example 3", () => {
//   assertEquals(isValidPassword(exampleInputs[2], policy2), false);
// });

Deno.test("Day 3 - Part 2 - Answer", () => {
  const counts = [
    countTrees(input, new Vect(1, 1)),
    countTrees(input, new Vect(3, 1)),
    countTrees(input, new Vect(5, 1)),
    countTrees(input, new Vect(7, 1)),
    countTrees(input, new Vect(1, 2)),
  ];

  const total = counts.reduce((t, n) => t * n);

  assertEquals(total, 7);
});