// generated by prepare script
import { readInput } from '../../helpers/readInput.js';
import { transformInput, solve } from './day22.js';

const parseOpts = { transform: transformInput };

describe('2021 - Day 22', () => {
  describe('Part 1', () => {
    describe('Example Input', () => {
      const exampleInput = readInput('./2021/day22/example-input', parseOpts);

      it('returns the expected result', () => {
        expect(solve(exampleInput.slice(0, 10))).toEqual(474140);
      });
    });

    describe('Final Input', () => {
      const input = readInput('./2021/day22/input', parseOpts);

      it('returns the expected result', () => {
        expect(solve(input.slice(0, 20))).toEqual(648681);
      });
    });
  });

  describe('Part 2', () => {
    describe('Example Input', () => {
      const exampleInput = readInput('./2021/day22/example-input', parseOpts);

      it('returns the expected result', () => {
        expect(solve(exampleInput)).toEqual(2758514936282235);
      });
    });

    describe('Final Input', () => {
      const input = readInput('./2021/day22/input', parseOpts);

      it('returns the expected result', () => {
        expect(solve(input)).toEqual(1302784472088899);
      });
    });
  });
});