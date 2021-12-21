// generated by prepare script
import { readInput } from "../../helpers/readInput.js";
import { part1, part2 } from "./day19.js";

const parseOpts = {
  transform: (o) => {
    return o.split(/\n\n/).map((c) => {
      const [, ...d] = c.split(/\n/);
      return d.map((n) => n.split(",").map(Number));
    });
  },
};

describe.skip("2021 - Day 19", () => {
  describe.skip("Part 1", () => {
    describe("Example Input", () => {
      const exampleInput = readInput("./2021/day19/example-input", parseOpts);

      it("returns the expected result", () => {
        expect(part1(exampleInput)).toEqual(79);
      });
    });

    describe("Final Input", () => {
      const input = readInput("./2021/day19/input", parseOpts);

      it("returns the expected result", () => {
        expect(part1(input)).toEqual(390);
      });
    });
  });

  describe("Part 2", () => {
    describe("Example Input", () => {
      const exampleInput = readInput("./2021/day19/example-input", parseOpts);

      it("returns the expected result", () => {
        expect(part2(exampleInput)).toEqual(3621);
      });
    });

    describe("Final Input", () => {
      const input = readInput("./2021/day19/input", parseOpts);

      it("returns the expected result", () => {
        expect(part2(input)).toEqual(13327);
      });
    });
  });
});
