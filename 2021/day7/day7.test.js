// generated by prepare script
import { readInput } from "../../helpers/readInput.js";
import { part1, part2 } from "./day7.js";

const parseOpts = { transform: (o) => o.split(",").map(Number) };

describe("2021 - Day 7", () => {
  describe("Part 1", () => {
    it("returns the expected result for example", () => {
      const exampleInput = readInput("./2021/day7/example-input", parseOpts);
      expect(part1(exampleInput)).toEqual(37);
    });

    it("returns the expected result", () => {
      const input = readInput("./2021/day7/input", parseOpts);
      expect(part1(input)).toEqual(340056);
    });
  });

  describe("Part 2", () => {
    it("returns the expected result for example", () => {
      const exampleInput = readInput("./2021/day7/example-input", parseOpts);
      expect(part2(exampleInput)).toEqual(168);
    });

    it("returns the expected result", () => {
      const input = readInput("./2021/day7/input", parseOpts);
      expect(part2(input)).toEqual(96592275);
    });
  });
});