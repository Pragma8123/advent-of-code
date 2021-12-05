// generated by prepare script
import { readInput } from "../../helpers/readInput.js";
import { part1, part2 } from "./day5.js";

const parseOpts = {
  delimiter: " -> ",
  transform: (o) => o.map((r) => r.map((c) => c.split(",").map(Number))),
};

describe("2021 - Day 5", () => {
  describe("Part 1", () => {
    it("returns the expected result for example", () => {
      const exampleInput = readInput("./2021/day5/example-input", parseOpts);
      expect(part1(exampleInput)).toEqual(5);
    });

    it("returns the expected result", () => {
      const input = readInput("./2021/day5/input", parseOpts);
      expect(part1(input)).toEqual(6283);
    });
  });

  describe("Part 2", () => {
    it("returns the expected result for example", () => {
      const exampleInput = readInput("./2021/day5/example-input", parseOpts);
      expect(part2(exampleInput)).toEqual(12);
    });

    it("returns the expected result", () => {
      const input = readInput("./2021/day5/input", parseOpts);
      expect(part2(input)).toEqual(18864);
    });
  });
});
