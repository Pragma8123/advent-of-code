// generated by prepare script
import { readInput } from "../../helpers/readInput.js";
import { part1, part2 } from "./day22.js";

const MATCHER =
  /(on|off) x=(-?\d+)\.\.(-?\d+),y=(-?\d+)\.\.(-?\d+),z=(-?\d+)\.\.(-?\d+)/;

const parseOpts = {
  transform: (o) => {
    return o.split(/\n/).map((l) => {
      let [, str, x1, x2, y1, y2, z1, z2] = l.match(MATCHER);

      return {
        on: str === "on",
        p1: { x: parseInt(x1, 10), y: parseInt(y1, 10), z: parseInt(z1, 10) },
        p2: { x: parseInt(x2, 10), y: parseInt(y2, 10), z: parseInt(z2, 10) },
      };
    });
  },
};

describe.skip("2021 - Day 22", () => {
  describe("Part 1", () => {
    describe("Example Input", () => {
      const exampleInput = readInput("./2021/day22/example-input", parseOpts);

      it("returns the expected result", () => {
        expect(part1(exampleInput)).toEqual(39);
      });
    });

    describe("Final Input", () => {
      const input = readInput("./2021/day22/input", parseOpts);

      it("returns the expected result", () => {
        expect(part1(input)).toEqual(648681);
      });
    });
  });

  describe("Part 2", () => {
    describe.skip("Example Input", () => {
      const exampleInput = readInput("./2021/day22/example-input", parseOpts);

      it("returns the expected result", () => {
        expect(part2(exampleInput)).toEqual(true);
      });
    });

    describe("Final Input", () => {
      const input = readInput("./2021/day22/input", parseOpts);

      it("returns the expected result", () => {
        expect(part2(input)).toEqual(true);
      });
    });
  });
});